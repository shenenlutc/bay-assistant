import React, { useEffect, useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom'
import DateTime from './component/DateTime'
import SideMenu from './component/SideMenu'
import { Layout, Flex, Col, Row, Input} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import logoImg from './assets/logo.png'
import downArrowImg from './assets/downArrow.svg'
import {routes, routesMap} from './router';
import { useTranslation } from "react-i18next";
import "./i18n";

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
  color: '#fff',
  backgroundColor:  '#047EA3',
  // height:'1200px',
  height: '91vh',
  overflow: 'auto',
};


const contentStyle: React.CSSProperties = {
  color: '#000',
  backgroundColor: '#EDEDED',
  height: '91vh',
  // height: '1200px',
  overflow: 'auto',
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
  paddingLeft: '10%'
}
const headerTextStyle : React.CSSProperties = {
  // fontFamily: 'Microsoft YaHei', sans-serif,
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: '30px',
    // lineHeight: 3,
}
const searchInputColStyle : React.CSSProperties = {
  textAlign:"right"
}

const searchInputStyle : React.CSSProperties = {
  // verticalAlign: '-40px',
}



const App: React.FC = () => {
  const location = useLocation();
  const route = routesMap.get(location.pathname);
  const { t, i18n } = useTranslation();

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
              <Link to='/'>
                <img src={logoImg} style={logoStyle} alt='logo'></img>
              </Link>
            </Col>
            <Col span={6} style={headerTextStyle}>
              <div onClick={() => { i18n.changeLanguage(i18n.language == 'en' ? 'zh' : 'en')}}>
                <span>{t('lang')}</span>
                <span><img src={downArrowImg} alt="downArrowImg" /></span>
              </div>
            </Col>
            <Col span={6} style={headerTextStyle}>
              <span>{ !!route? t(route.key) : t('application') }</span>
            </Col>
            <Col span={7} style={searchInputColStyle}>
                <Input  style={searchInputStyle} size="large" placeholder={t('searchApp')} prefix={<SearchOutlined />} />
            </Col>
          </Row>
        <Layout>
          <Sider width="10%" style={siderStyle}>
              <SideMenu />
          </Sider>
          <Content style={contentStyle}>
            <Outlet/>
          </Content>
        </Layout>
      </Layout>
    </Flex>
  )
};

export default App;
