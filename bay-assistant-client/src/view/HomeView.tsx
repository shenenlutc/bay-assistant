import { Layout, Flex, Col, Divider, Row, Input} from 'antd';
import { Link } from 'react-router-dom'
import home1Img from '../assets/home1.png';
import home2Img from '../assets/home2.png';
import home3Img from '../assets/home3.png';
import allAppIcon from '../assets/allAppIcon.png';
import clainPersonnelIcon from '../assets/clainPersonnelIcon.png';
import officeIcon from '../assets/officeIcon.png';
import myUsualIcon from '../assets/myUsualIcon.png';
import marketingIcon from '../assets/marketingIcon.png';

const row1Style : React.CSSProperties = {
    height: '35%'
}
const row2Style : React.CSSProperties = {
    height: '30%',
    textAlign: 'center',
    alignItems: 'center'
}

const colStyle : React.CSSProperties = {
    height: '100%'
}

const home1ImgStyle : React.CSSProperties = {
    padding: '10px',
    width: '100%',
    height: '100%'
}
const home2ImgStyle : React.CSSProperties = {
    paddingTop: '10px',
    paddingRight: '10px',
    width: '100%',
    height: '49%'
}
const home3ImgStyle : React.CSSProperties = {
    paddingBottom: '10px',
    paddingRight: '10px',
    width: '100%',
    height: '50%'
}

const HomeView: React.FC = () => {
    return (
        <>
            <Row style={row1Style}>
                <Col span={16} style={colStyle}>
                    <img src={home1Img} style={home1ImgStyle} alt='home1Img'></img>
                </Col>
                <Col span={8}  style={colStyle}>
                    <img src={home2Img} style={home2ImgStyle} alt='home2Img'></img>
                    <img src={home3Img} style={home3ImgStyle} alt='home3Img'></img>
                </Col>
            </Row>
            <Row style={row2Style}  justify="end">
                <Col span={8}>
                    <div>
                        <Link to='/'>
                            <img src={allAppIcon} alt='logo'></img>
                        </Link>
                       
                    </div>
                    <div>
                        <span>所有应用</span>
                    </div>
                </Col>
                <Col span={8}>
                    <div>
                        <Link to='/'>
                            <img src={clainPersonnelIcon} alt='logo'></img>
                        </Link>
                    </div>
                    <div>
                        <span>报销及人事</span>
                    </div>
                </Col>
                <Col span={8}>
                    <div>
                        <Link to='/'>
                            <img src={officeIcon} alt='logo'></img>
                        </Link>
                    </div>
                    <div>
                        <span>办公助手</span>
                    </div>
                </Col>
            </Row>
            <Row style={row2Style}  justify="end">
                <Col span={12}>
                    <div>
                        <Link to='/'>
                            <img src={myUsualIcon} alt='logo'></img>
                        </Link>
                    </div>
                    <div>
                        <span>我的常用</span>
                    </div>
                </Col>
                <Col span={12}>
                    <div>
                        <Link to='/'>
                            <img src={marketingIcon} alt='logo'></img>
                        </Link>
                    </div>
                    <div>
                        <span>市场及营销</span>
                    </div>
                </Col>
            </Row>
      </>
    )
};
  
export default HomeView;