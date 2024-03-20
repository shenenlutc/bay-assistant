import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row, Button } from 'antd';
import logo from '../assets/img/logo.png'; //图标
import { List, ListRowRenderer, AutoSizer} from 'react-virtualized';
import '../assets/style/applicantAll.scss';
import { formatData } from '../utils/formatData';
import '../i18n';
import { useTranslation } from 'react-i18next';

//索引标题高度
const TITLE_HEIGHT = 36;
//一条数据的高度
const NAME_HEIGHT = 200;

const Application: React.FC = () => {
  const { t, i18n } = useTranslation(); //语言切换
  const { categoryId } = useParams(); //获取路径上的参数
  const [data, setData] = useState([]); // 用于存储获取的数据
  const myListRef = useRef<List>(null);


  useEffect(() => {
    axios
      .get('/api/application/test')
      .then((response) => {
        setData(response.data); // 设置数据状态
        console.log("后端返回的数据：======",response.data);
        
      })
      .catch((error) => {
        console.error('Error fetching data: ', error); // 错误处理
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
    const text = '这是一段非常非常长的文字，需要鼠标悬浮显示完整内容。';
    return (
      <div key={key} style={style} className='dataCss'>
        <div className='title'>{letter}</div>
        <Row className='applicationRow'>
          {datas[letter].map((item: any) => (
            <div className='name' key={item.id}>
              <Col span={8} className='applicationCol'>
                <img src={logo} style={{ backgroundColor: 'rgb(98, 0, 255)' }} />
                <span className='colSpan' title={item.appEname}>
                  <span className='descriptionSpan'> {i18n.language == 'zh' ? item.description : item.appDescription}</span>
                  <Button type='primary'>{t('more')}</Button>
                </span>
                <p>{i18n.language == 'zh' ? item.appName : item.appEname}</p>
              </Col>
            </div>
          ))}
        </Row>
      </div>
    );
  };
  //封装渲染右侧索引列表的方法
  const [activeIndex, setActiveIndex] = useState(0); //指定右侧字母索引列表高亮的索引号

  function renderRightIndex(): JSX.Element[] {
    return dataIndex.map((item, index) => (
      <li
        className='dataIndex-item'
        key={item}
        onClick={() => {
          myListRef.current?.scrollToRow(index);
        }}>
        <span className={activeIndex === index ? 'index-active' : ''}>{item}</span>
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
    <div className='applicant'>
      {/* 列表数据 */}
      <AutoSizer>{({ width, height }) => <List ref={myListRef} width={width} height={height} rowCount={dataIndex.length} rowHeight={getRowHeight} rowRenderer={rowRenderer} onRowsRendered={({ startIndex }) => onRowsRendered(startIndex)} scrollToAlignment='start' />}</AutoSizer>
      {/* 右侧索引列表 */}
      <ul className='dataIndex'>{renderRightIndex()}</ul>
    </div>
  );
};

export default Application;
