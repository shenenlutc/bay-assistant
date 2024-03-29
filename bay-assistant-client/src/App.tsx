import React, { useEffect, useState, useContext} from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom'
import DateTime from './component/DateTime'
import SideMenu from './component/SideMenu'
import { Layout, Flex, Col, Row, Input} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import logoImg from './assets/img/logo.svg'
import downArrowImg from './assets/img/downArrow.svg'
import {routes, routesMap} from './router';
import { useTranslation } from "react-i18next";
import "./i18n";
import { MyContext } from "./component/search/searchConst";

const { Sider, Content } = Layout;

const layoutStyle = {
  borderRadius: '0, 0',
  overflow: 'hidden',
  // width: 'calc(100% - 8px)',
  // maxWidth: 'calc(100% - 8px)',
  backgroundColor:  '#047EA3',
  width: '100%',
  height: '100%',
};

const siderStyle: React.CSSProperties = {
  paddingTop: "2%",
  color: '#fff',
  backgroundColor:  '#047EA3',
  // height:'1200px',
  minHeight: '89vh',
  overflow: 'auto',
};


const contentStyle: React.CSSProperties = {
  // fontFamily:'var(--FZXH1JW)',
  color: '#000',
  backgroundColor: '#EDEDED',
  minHeight: '89vh',
  // height: '1200px',
  // overflow: 'auto',
};


const headerRow1Style : React.CSSProperties = {
  backgroundColor: '#047EA3',
  height: '30%',
  color: '#FFFFFF',
}
const headerRow2Style : React.CSSProperties = {
  // boxSizing: 'border-box',
  backgroundColor: '#047EA3',
  height: '70%',
  padding: '-1px',
  color: '#FFFFFF',
  alignItems: 'center'
}

const logoStyle : React.CSSProperties = {
  width: '80%',
  paddingTop:'2%',
  paddingLeft: '10%'
}
const headerTextStyle : React.CSSProperties = {
    // fontFamily:'var(--FZXH1JW)',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: '30px',
    // lineHeight: 3,
}
const downArrowImgStyle : React.CSSProperties = {
  position: 'relative',
  left: '7px',
  bottom: '4px',
  // paddingLeft: '20px',
  width: '18px',
  height: '10px',
  transform: 'rotate(180deg)'
}


const searchInputColStyle : React.CSSProperties = {
  textAlign:"right"
}

const searchInputStyle : React.CSSProperties = {
  // verticalAlign: '-40px',
}
// 存储一个值
function saveValue(key: string, value: string) {
  localStorage.setItem(key, value);
}
// 获取一个值
function getValue(key: string): string | null {
  return localStorage.getItem(key);
}


const App: React.FC = () => {
  const location = useLocation();
  const route = routesMap.get(location.pathname);
  const { t, i18n } = useTranslation();
  // 搜索框
  const {onChangeValue} =useContext(MyContext);

  const { value } = useContext(MyContext); //应用页面传递信息，设置头部信息
  if (value != "") {
    saveValue("headTitle", value);
  }
  const headTitle = getValue("headTitle");

  return (
    <Flex wrap="wrap">
      <Layout style={layoutStyle}>
          <Row style={headerRow1Style}>
            <Col span={24}>
              <DateTime></DateTime>
            </Col>
          </Row>
          <Row style={headerRow2Style}>
            <Col span={4}>
              <Link to='/application'>
                <img src={logoImg} style={logoStyle} alt='logo'></img>
              </Link>
            </Col>
            <Col span={6} style={headerTextStyle}>
              <div onClick={() => { i18n.changeLanguage(i18n.language == 'en' ? 'zh' : 'en')}}>
                <span>{t('lang')}</span>
                <span><img src={downArrowImg} style={downArrowImgStyle} alt="downArrowImg" /></span>
              </div>
            </Col>
            <Col span={6} style={headerTextStyle}>
              <span>{ !!route? t(route.key) : t(String(headTitle)) }</span>
            </Col>
            <Col span={7} style={searchInputColStyle}>
                <Input  style={searchInputStyle} size="large" placeholder={t('searchApp')} prefix={<SearchOutlined />}   onChange={(e)=>onChangeValue(e.target.value)}      />
            </Col>
          </Row>
        <Layout>
          <Sider width="11%" style={siderStyle}>
              <SideMenu />
          </Sider>
          
          <Content style={contentStyle}  >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
      
    </Flex>
  )
};

export default App;
