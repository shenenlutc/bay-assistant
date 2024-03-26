import axios from "axios";
import React, { useState, useEffect, useContext, useRef } from "react";
import { useParams,Link } from "react-router-dom";
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
  const { value } = useContext(MyContext); //头部搜索框传递过来的值
  const prevValue = useRef(value);
  //根据分类获取所有数据
  const getByAppCategoryId = () => {
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
  };

  useEffect(() => {
    if (prevValue.current !== value) {
      prevValue.current = value;
      if (value!=null && value!="" && value.trim() != null && value.trim() != "") {
        axios
          .get("/api/application/getByAppCategoryIdAndName", {
            params: { appCategoryId: type, name: value },
          })
          .then((response) => {
            setData(response.data); // 设置数据状态
            console.log("response.data=====", response.data);
          })
          .catch((error) => {
            console.error("Error fetching data: ", error); // 错误处理
          });
      } else {
        //重新查询所有
        getByAppCategoryId();
      }
    }
  }, [value]);

  useEffect(() => {
    getByAppCategoryId(); //根据分类获取所有数据
  }, []);

  const datas: {
    id: number;
    appName: string;
    appEname: string;
    description: string;
    appDescription: string;
    appIcon: number;
  }[] = data;
 
//更多按钮
const {onChangeValue} =useContext(MyContext);

  return (
    <div className="applicationType">
      <List
        grid={{ gutter: 60, column: 3 }}
        dataSource={datas}
        renderItem={(item:any) => (
          <List.Item>
            <div className="subelement">
              <img
               src={"/api/file/download?id=".concat(item.appIcon)}
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
                <Link to='/application/more'>
                  <Button type="primary" className="button" size="small" onClick={()=>{onChangeValue(item.id)}}>
                    {t("more")}
                  </Button>
                </Link>
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
