import axios from "axios";
import React, { useState, useEffect, useContext, useRef } from "react";
import { useParams } from "react-router-dom";
import { Button } from "antd";
import "../i18n";
import { useTranslation } from "react-i18next";
import { List } from "antd";
import "../assets/style/applicatType.scss";
import { MyContext } from "../component/search/searchConst";

const ApplicationType: React.FC = () => {
  const { t, i18n } = useTranslation(); //语言切换
  const { type } = useParams(); //获取路径上的参数 值
  const [data, setData] = useState([]); // 用于存储获取的数据
  const [filenetData, setFilenetData] = useState([]); // 用于存储获取的filenet数据
  const {value}  = useContext(MyContext); //头部搜索框传递过来的值
  const prevValue= useRef(value);
  useEffect(() => {
    if (prevValue.current !== value) {
      prevValue.current = value;
      if (value.trim() != null && value.trim() != "") {
        axios
          .get("/api/application/getByAppCategoryIdAndName", {
            params: { appCategoryId: type,name:value },
          })
          .then((response) => {
            setData(response.data); // 设置数据状态
            console.log("response.data=====",response.data);
            
          })
          .catch((error) => {
            console.error("Error fetching data: ", error); // 错误处理
          });
      } else {
        console.log("搜索为空");
      }
    }
  }, [value]);
  

  useEffect(() => {
    axios
      .get("/api/application/getByAppCategoryId", {
        params: { appCategoryId: type },
      })
      .then((response) => {
        setData(response.data); // 设置数据状态
      })
      .catch((error) => {
        console.error("Error fetching data: ", error); // 错误处理
      });
    //获取的filenet数据
    axios
      .get("/api/filenet/list")
      .then((response) => {
        setFilenetData(response.data); // 设置数据状态
      })
      .catch((error) => {
        console.error("Error fetching data: ", error); // 错误处理
      });
  }, []);

  const datas: {
    id: number;
    appName: string;
    appEname: string;
    description: string;
    appDescription: string;
    appIcon: number;
  }[] = data;
  const filenetDatas: {
    id: number;
    filePath: string;
  }[] = filenetData;
  //图标
  const appIconSrc = (appIconId: number) => {
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

  return (
    <div className="applicationType">
      <List
        grid={{ gutter: 60, column: 3 }}
        dataSource={datas}
        renderItem={(item) => (
          <List.Item>
            <div className="subelement">
              <img
                src={appIconSrc(item.appIcon)}
                className="imgStyle"
                style={{ width: "80px", height: "80px" }}
              />
              <span className="subelement-span">
                <span
                  className="descriptionSpan"
                  title={
                    i18n.language == "zh"
                      ? item.description
                      : item.appDescription
                  }
                >
                  {i18n.language == "zh"
                    ? item.description
                    : item.appDescription}
                </span>
                <p>
                  <Button type="primary" className="button" size="small">
                    {t("more")}
                  </Button>
                </p>
              </span>
              <p>{i18n.language == "zh" ? item.appName : item.appEname}</p>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ApplicationType;
