import React from 'react';
import { useNavigate, Routes, Route, Router, Outlet, Link} from 'react-router-dom'
import DateTime from './component/DateTime'
import SideMenu from './component/SideMenu'
import { Layout, Flex, Col, Divider, Row, Input} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import logoImg from './assets/logo.png'


const { Header, Footer, Sider, Content } = Layout;

const layoutStyle = {
  borderRadius: '0, 0',
  overflow: 'hidden',
  // width: 'calc(100% - 8px)',
  // maxWidth: 'calc(100% - 8px)',
  backgroundColor:  '#047EA3',
  width: '100%',
  height: '100%',
};

const headerStyle: React.CSSProperties = {
  height: '10vh',
  backgroundColor: '#047EA3',
  padding: 0,
};

const siderStyle: React.CSSProperties = {
  // textAlign: 'center',
  // lineHeight: '120px',
  color: '#fff',
  backgroundColor:  '#047EA3',
  // height:'1200px',
  height: '90vh',
  overflow: 'auto',
};


const contentStyle: React.CSSProperties = {
  color: '#000',
  backgroundColor: '#EDEDED',
  height: '90vh',
  // height: '1200px',
  overflow: 'auto',
};


const row1Style : React.CSSProperties = {
  // position: 'absolute',
  // textAlign: 'left',
  // padding: '2px 2px 2px 2px',
  // boxSizing: 'border-box',
  // width: '100%'
  // backgroundColor: '#047EA3',
  // paddingBottom: '5%',
  backgroundColor: '#047EA3',
  height: '30%',
  color: '#FFFFFF',
}
const row2Style : React.CSSProperties = {
  // position: 'absolute',
  // textAlign: 'left',
  // padding: '2px 2px 2px 2px',
  // boxSizing: 'border-box',
  // width: '100%'
  // backgroundColor: '#047EA3',
  // paddingBottom: '5%',
  backgroundColor: '#047EA3',
  height: '70%',
  padding: '-1px',
  color: '#FFFFFF',
}

const logoStyle : React.CSSProperties = {
  height: '95%',
  paddingLeft: '10%'
}
const textStyle : React.CSSProperties = {
  // fontFamily: 'Microsoft YaHei', sans-serif,
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: '30px',
    // lineHeight: 3,
    alignItems: 'bottom'
}
const searchInputStyle : React.CSSProperties = {
  // verticalAlign: '-40px',
}



const aaa=5;

const App: React.FC = () => (
  <Flex wrap="wrap">
    <Layout style={layoutStyle}>
        <Row style={row1Style}>
          <Col span={24}>
            <DateTime></DateTime>
          </Col>
        </Row>
        <Row style={row2Style}>
          <Col span={3}>
            <Link to='/'>
              <img src={logoImg} style={logoStyle} alt='logo'></img>
            </Link>
          </Col>
          <Col span={8} style={textStyle}>
            <span>中文</span>
          </Col>
          <Col span={4} style={textStyle}>
            <span>应用</span>
          </Col>
          <Col span={7}>
              <Input  style={searchInputStyle} size="large" placeholder="Search App" prefix={<SearchOutlined />} />
          </Col>
          <Col span={1}>
              
          </Col>
        </Row>
      <Layout>
        <Sider width="10%" style={siderStyle}>
            <SideMenu/>
        </Sider>
        <Content style={contentStyle}>
           <Outlet/>
        </Content>
      </Layout>
    </Layout>
    
  </Flex>
    
);

export default App;
