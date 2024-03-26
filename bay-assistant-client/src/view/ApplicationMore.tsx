import React, { useContext, useState, useEffect, useRef } from "react";
import { MyContext } from "../component/search/searchConst";
import axios from "axios";
import Application from "./Application";
import { Button ,Modal} from "antd";
import { useTranslation } from "react-i18next";
import "../assets/style/applicationMore.scss";
import logo from "../assets/img/logo.png";
import { List } from "antd";
import { title } from "process";

// 存储一个值
function saveValue(key: string, value: string) {
  localStorage.setItem(key, value);
}
// 获取一个值
function getValue(key: string): string | null {
  return localStorage.getItem(key);
}

interface Application {
  id: number;
  appName: string;
  appEname: string;
  description: string;
  appDescription: string;
  appIcon: number;
  appUrl: string;
  appType: string;
}
const ApplicationMore: React.FC = () => {
  const { t, i18n } = useTranslation(); //语言切换
  const [applicationData, setAapplicationData] = useState<Application>(); // 用于存储获取的数据
  const [attachmentData, setAttachmentData] = useState([]); // 用于存储获取的数据
  const [filePathData, setFilePathData] = useState([]); // 用于存储获取的数据
  const [filenetData, setFilenetData] = useState([]); // 用于存储获取的filenet数据
  const { value } = useContext(MyContext); //更多按钮传递过来的appId值
  if (value != "") {
    saveValue("appId", value);
  }

  const appId = getValue("appId");
  console.log("appId===", appId);

  //根据appId获取Applicantion有数据
  const getApplicantion = () => {
    axios
      .get("/api/application/getApplicantionById", {
        params: { appId: appId },
      })
      .then((response) => {
        setAapplicationData(response.data); // 设置数据状态
        console.log("Applicantion有数据=====", response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error); // 错误处理
      });
  };
  //根据appId获取Attachment有数据
  const getAttachment = () => {
    axios
      .get("/api/attachment/getListByAppId", {
        params: { appId: appId },
      })
      .then((response) => {
        setAttachmentData(response.data); // 设置数据状态
        console.log("Attachment有数据=====", response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error); // 错误处理
      });
  };
  //获取的filenet数据
  const getfilenetList = () => {
    axios
      .get("/api/filenet/list")
      .then((response) => {
        setFilenetData(response.data); // 设置数据状态
      })
      .catch((error) => {
        console.error("Error fetching data: ", error); // 错误处理
      });
  };
  //更多内部信息图片：根据appId获取Attachment有数据
  const getFilenetByAppId = () => {
    axios
      .get("/api/attachment/getByAppId", {
        params: { appId: appId },
      })
      .then((response) => {
        setFilePathData(response.data); // 设置数据状态
        console.log("更多内部信息图片：=====", response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error); // 错误处理
      });
  };
  useEffect(() => {
    getApplicantion(); //根据appId获取Applicantion有数据
    getAttachment(); //根据appId获取Attachment有数据
    getfilenetList(); //获取的filenet数据
    getFilenetByAppId(); //更多内部信息图片：根据appId获取Attachment有数据
  }, []);

  const filenetDatas: {
    id: number;
    filePath: string;
  }[] = filenetData;

  //图标
  const appIconSrc = (appIconId: any) => {
    const filePath = filenetDatas.find((obj) => obj.id === appIconId)?.filePath;
    let path = filePath?.replaceAll("\\", "/");
    let icon;
    try {
      icon = require("../assets/" + path);
    } catch (error) {
      console.log("查找图片失败：", error);
    }
    return icon;
  };
  //内部图片
  const appImgSrc = (filePath: string) => {
    let path = filePath?.replaceAll("\\", "/");
    let img;
    try {
      img = require("../assets/" + path);
    } catch (error) {
      console.log("查找图片失败：", error);
    }
    return img;
  };
 //appType== Native打开小窗口
 const [open, setOpen] = useState(false);
//  const [loading, setLoading] = useState(false);
 const handleOk = () => {
  setOpen(false);
};

const handleCancel = () => {
  setOpen(false);
};

  const openNewWindow = (appUrl: any) => {
    console.log("applicationData?.appType=====",applicationData?.appType);
   if(applicationData?.appType==="Native"){
    // Native
    // const showModal = () => {
      setOpen(true);
    // };
   }else{
    // web
  
    if (appUrl != undefined && appUrl != null && appUrl != "") {
      window.open(appUrl, "_blank");
    } else {
      window.open("https://www.baidu.com/", "_blank");
    }
  }  
  };

  return (
    <div className="applicationMore">
      <div className="icon">
        <img src={appIconSrc(applicationData?.appIcon)} style={{height:"160px"}} />
      </div>
      <div className="content">
        <div className="text">
          {i18n.language == "zh"
            ? applicationData?.appName
            : applicationData?.appEname}
        </div>
        <Button
        className="openButton"
          type="primary"
          onClick={() => {
            openNewWindow(applicationData?.appUrl);
          }}
        >
          {t("open")}
        </Button>
      </div>

      <div className="gallery-container">
        {filePathData.map((filePath) => (
          <img src={appImgSrc(filePath)} className="img" />
        ))}
      </div>
      <div>
        <p>{t("applicationDescription")}</p>
        <span>
          {i18n.language == "zh"
            ? applicationData?.description
            : applicationData?.appDescription}
        </span>
      </div>

      {/* 小窗口 */}
      <Modal
        style={{ marginTop: "160px" }}
        width="280px"
        open={open}
        onCancel={handleCancel}
        title={
          <div style={{ textAlign: "center" }}>
            <span>{t("title")}</span>
          </div>
        }
        footer={
          <div style={{ textAlign: "center" }}>
            <Button
              type="primary"
              style={{ display: "block", margin: "0 auto" }}
              onClick={handleOk}
            >
             {t("confirmButton")}
            </Button>
          </div>
        }
      >
        <p style={{ textAlign: "center" }}>
          请从拜耳企业应用商店(App Catalog)下载安装
        </p>
      </Modal>
    </div>
  );
};

export default ApplicationMore;
