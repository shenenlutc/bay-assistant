import axios from "axios";
import React, { useState, useEffect, useRef, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Col, Row, Button } from "antd";
import { List, ListRowRenderer, AutoSizer } from "react-virtualized";
import "../assets/style/applicant.scss";
import { formatData } from "../utils/formatData";
import "../i18n";
import { useTranslation } from "react-i18next";
import { MyContext } from "../component/search/searchConst";

//索引标题高度
const TITLE_HEIGHT = 36;
//一条数据的高度
const NAME_HEIGHT = 200;

const Application: React.FC = () => {
  const { t, i18n } = useTranslation(); //语言切换
  const { categoryId } = useParams(); //获取路径上的参数
  const [data, setData] = useState([]); // 用于存储获取的数据
  const myListRef = useRef<List>(null);
  const [filenetData, setFilenetData] = useState([]); // 用于存储获取的filenet数据
  const { value } = useContext(MyContext); //头部搜索框传递过来的值
  const prevValue = useRef(value);
  //更多按钮
  const { onChangeValue } = useContext(MyContext);
  //获取所有数据
  const getList = () => {
    axios
      .get("/api/application/list")
      .then((response) => {
        setData(response.data); // 设置数据状态
        console.log("后端返回的数据：======", response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error); // 错误处理
      });
  };

  useEffect(() => {
    if (prevValue.current !== value) {
      prevValue.current = value;
      if (
        value != null &&
        value != "" &&
        value.trim() != null &&
        value.trim() != ""
      ) {
        axios
          .get("/api/application/getByName", {
            params: { name: value },
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
        getList();
      }
    }
  }, [value]);

  useEffect(() => {
    getList(); //获取所有数据的方法
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

  // {A:[{...},{..,}], B:[{},{}]} 渲染右侧索引的数据格式：["A","B","D"]
  const { dataList, dataIndex } = formatData(data);
  const datas = dataList as any;
  //行高的计算
  function getRowHeight(parameter: any) {
    const { index } = parameter;
    const result = Math.ceil(datas[dataIndex[index]].length / 3);
    // TITLE_HEIGHT+ datas[dataIndex[index]].length*NAME_HEIGHT;
    return TITLE_HEIGHT + result * NAME_HEIGHT;
  }
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    const letter = dataIndex[index];
    return (
      <div key={key} style={style} className="dataCss">
        <div className="title">{letter}</div>
        <Row className="applicationRow">
          {datas[letter].map((item: any) => (
            <div className="name" key={item.id}>
              <Col span={8} className="applicationCol">
                <img
                  src={"/api/file/download?id=".concat(item.appIcon)}
                  style={{ width: "80px", height: "80px" }}
                />
                <span className="colSpan" title={item.appEname}>
                  <span className="descriptionSpan">
                    {" "}
                    {i18n.language == "zh"
                      ? item.description
                      : item.appDescription}
                  </span>
                  <Link to="/application/more">
                    <Button
                      type="primary"
                      onClick={() => {
                        onChangeValue(item.id);
                      }}
                    >
                      {t("more")}
                    </Button>
                  </Link>
                </span>
              </Col>
              <p style={{ display: "flex", justifyContent: "center" }}>
                {i18n.language == "zh" ? item.appName : item.appEname}
              </p>
            </div>
          ))}
        </Row>
      </div>
    );
  };
  //封装渲染右侧索引列表的方法
  const [activeIndex, setActiveIndex] = useState(0); //指定右侧字母索引列表高亮的索引号

  function renderRightIndex(): JSX.Element[] {
    return dataIndex.map((item: any, index: any) => (
      <li
        className="dataIndex-item"
        key={item}
        onClick={() => {
          console.log("索引号：===", index);

          myListRef.current?.scrollToRow(index);
        }}
      >
        <span className={activeIndex === index ? "index-active" : ""}>
          {item}
        </span>
      </li>
    ));
  }

  //用于获取list组件中渲染行的信息
  const onRowsRendered = (startIndex: number) => {
    console.log(startIndex);
    if (activeIndex !== startIndex) {
      setActiveIndex(startIndex);
    }
  };

  return (
    <div className="applicant">
      {/* 列表数据 */}
      <AutoSizer>
        {({ width, height }) => (
          <List
            ref={myListRef}
            width={width}
            height={height}
            rowCount={dataIndex.length}
            rowHeight={getRowHeight}
            rowRenderer={rowRenderer}
            onRowsRendered={({ startIndex }) => onRowsRendered(startIndex)}
            scrollToAlignment="start"
            scrollToIndex={-1}
          />
        )}
      </AutoSizer>
      {/* 右侧索引列表 */}
      <ul className="dataIndex">{renderRightIndex()}</ul>
    </div>
  );
};

export default Application;
