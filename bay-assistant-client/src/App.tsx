import React from 'react';
import { Outlet, Link} from 'react-router-dom'
import DateTime from './component/DateTime'
import SideMenu from './component/SideMenu'
import { Layout, Flex, Col, Row, Input} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import logoImg from './assets/logo.png'
import downArrowImg from './assets/downArrow.svg'

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


const headerRow1Style : React.CSSProperties = {
  backgroundColor: '#047EA3',
  height: '30%',
  color: '#FFFFFF',
}
const headerRow2Style : React.CSSProperties = {
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
  alignItems: 'center'
}

const logoStyle : React.CSSProperties = {
  width: '90%',
  paddingLeft: '10%'
}
const headerTextStyle : React.CSSProperties = {
  // fontFamily: 'Microsoft YaHei', sans-serif,
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: '30px',
    // lineHeight: 3,
}
const searchInputStyle : React.CSSProperties = {
  // verticalAlign: '-40px',
}

const handleLanguageChange = ()=> {
    alert()
}

const aaa=5;

const App: React.FC = () => (
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
          <Col span={7} style={headerTextStyle}>
            <div onClick={()=> handleLanguageChange()}>
              <span>中文</span>
              <span><img src={downArrowImg} alt="downArrowImg" /></span>
            </div>
          </Col>
          <Col span={4} style={headerTextStyle}>
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
