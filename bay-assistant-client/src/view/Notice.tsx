/**
 * 通知页面
 * @returns 
 */
import axios from "axios";
import React, {useState,useEffect } from "react";



interface Message {
    id: number;
    msgContent: string;
  }

const Notice: React.FC = () => {
    const [messageData, setMessageData] = useState<Message>(); // 用于存储获取的数据
//查询最新通知
  const getLatest = () => {
    axios
      .get("/api/message/getLatest")
      .then((response) => {
        setMessageData(response.data); // 设置数据状态
      })
      .catch((error) => {
        console.error("Error fetching data: ", error); // 错误处理
      });
  };
  useEffect(() => {
    getLatest(); //根据appId获取Applicantion有数据
  }, []);
    return (
        <div>
            <h1 style={{textAlign:"center"}}>最新通知</h1>
            <p>{messageData?.msgContent}</p>
        </div>
    )
};
  
export default Notice;
