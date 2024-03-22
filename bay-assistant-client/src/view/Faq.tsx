/**
 * 常见问题页面
 */
import axios from "axios";
import { List, Typography } from "antd";
import "../assets/style/faq.scss";
import React, { useContext, useState, useEffect } from "react";
import { MyContext } from "../component/search/searchConst";
import "../assets/style/faq.scss";

//处理高亮词
const highlightWords = (origin: string, keywords: string) => {
  if (!keywords) {
    return <span dangerouslySetInnerHTML={{ __html: origin }} />;
  } else {
    let bright = `<span style='color: red'>${keywords}</span>`;
    let reg = new RegExp(keywords, "gi");
    let replaceAfter = origin.replace(reg, bright);
    return <span dangerouslySetInnerHTML={{ __html: replaceAfter }} />;
  }
};

const Issue: React.FC = () => {
  const [data, setData] = useState([]); // 用于存储获取的数据
  //数据 获取数据库的数据
  useEffect(() => {
    axios
      .get("/api/faq/list")
      .then((response) => {
        setData(response.data); // 设置数据状态
      })
      .catch((error) => {
        console.error("Error fetching data: ", error); // 错误处理
      });
  }, []);

  //定义一个数组
  const [displays, setDisplays] = useState(() => {
    let arr = [];
    for (let i = 0; i < 20; i++) {
      arr.push({ index: i, value: "none" });
    }
    return arr;
  });

  //更改数组中指定索引处的value值
  const updateDisplaysValue = (index: number, newValue: string) => {
    setDisplays(
      displays.map((item) =>
        item.index == index ? { ...item, value: newValue } : item
      )
    );
  };
  //手动控制显示影厂
  const handleClickDisplay = (index: number) => {
    let newValue;
    if (displays[index].value == "none") {
      newValue = "block";
    } else {
      newValue = "none";
    }
    updateDisplaysValue(index, newValue);
  };

  const { value } = useContext(MyContext);
  const searchWords = value;

  const datas: {
    id: number;
    faqTitle: string;
    faqContent: string;
  }[] = data;
  return (
    <div className="issue">
      <List
        size="large"
        bordered
        dataSource={datas}
        renderItem={(item, index) => (
          <List.Item
            className={index % 2 === 0 ? "grey-background" : "white-background"}
            style={{ borderBottom: "2px solid #8a8888" }}
          >
            <div onClick={() => handleClickDisplay(index)}>
              <span className="title">
                <Typography.Text className="typographyText">
                  Q{index + 1}:
                </Typography.Text>
                {highlightWords(item.faqTitle, searchWords)}
              </span>
              <p
                style={{
                  display: displays[index].value,
                  height: "auto",
                  marginTop: "10px",
                  borderTop: "2px solid #8a8888",
                }}
              >
                {highlightWords(item.faqContent, searchWords)}
              </p>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Issue;
