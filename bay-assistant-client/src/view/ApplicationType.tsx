import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "antd";
import logo from "../assets/img/logo.png"; //图标
import "../i18n";
import { useTranslation } from "react-i18next";
import {  List } from "antd";
import "../assets/style/applicatType.scss";

const ApplicationType: React.FC = () => {
  const { t, i18n } = useTranslation(); //语言切换
  const { type } = useParams(); //获取路径上的参数 值
  const [data, setData] = useState([]); // 用于存储获取的数据

 
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
  }, []);

  const datas: {
    id: number;
    appName: string;
    appEname:string;
    description:string;
    appDescription:string;

  }[] = data;

  return (
    <div className="applicationType">
      <List
        grid={{ gutter: 60, column: 3 }}
        dataSource={datas}
        renderItem={(item) => (
          <List.Item>
            <div className="subelement">
            <img src={logo} style={{ backgroundColor: 'rgb(98, 0, 255)' }} />
                <span className="subelement-span" >
                  <span className='descriptionSpan' title={i18n.language == 'zh' ? item.description : item.appDescription}>{i18n.language == 'zh' ? item.description : item.appDescription}</span>
                  <p>
                    <Button type='primary' className="button" size="small">{t('more')}</Button>
                  </p>
                </span>
                <p>{i18n.language == 'zh' ? item.appName : item.appEname}</p>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ApplicationType;
