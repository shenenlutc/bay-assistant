import {Col, Row} from 'antd';
import { Link } from 'react-router-dom'
import home1Img from '../assets/img/home1.png';
import home2Img from '../assets/img/home2.png';
import home3Img from '../assets/img/home3.png';
import allAppIcon from '../assets/img/allAppIcon.png';
import claimPersonnelIcon from '../assets/img/claimPersonnelIcon.png';
import officeIcon from '../assets/img/officeIcon.png';
import myUsualIcon from '../assets/img/myUsualIcon.png';
import marketingIcon from '../assets/img/marketingIcon.png';
import { useTranslation } from "react-i18next";
import "../i18n";
import React, { useContext } from "react";
import { MyContext } from "../component/search/searchConst";

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
    paddingLeft: '10px',
    paddingTop: '10px',
    paddingRight: '8px',
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
    paddingRight: '10px',
    width: '100%',
    height: '50%'
}

const HomeView: React.FC = () => {
    const { t } = useTranslation();
    //传递市场营销，办公助手..给头部显示
    const { value } = useContext(MyContext); //头部搜索框传递过来的值
    const {onChangeValue} =useContext(MyContext)
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
                        <Link to='/application/all' onClick={()=>{onChangeValue('allApp')}}>
                            <img src={allAppIcon} alt='logo'></img>
                        </Link>
                       
                    </div>
                    <div>
                        <span>{t('allApp')}</span>
                    </div>
                </Col>
                <Col span={8}>
                    <div>
                        <Link to='/application/1' onClick={()=>{onChangeValue('claimPersonnel')}}>
                            <img src={claimPersonnelIcon} alt='logo'></img>
                        </Link>
                    </div>
                    <div>
                        <span>{t('claimPersonnel')}</span>
                    </div>
                </Col>
                <Col span={8}>
                    <div>
                        <Link to='/application/4' onClick={()=>{onChangeValue('office')}}>
                            <img src={officeIcon} alt='logo'></img>
                        </Link>
                    </div>
                    <div>
                        <span>{t('office')}</span>
                    </div>
                </Col>
            </Row>
            <Row style={row2Style}  justify="end">
                <Col span={12}>
                    <div>
                        <Link to='/application/2' onClick={()=>{onChangeValue('myUsual')}}>
                            <img src={myUsualIcon} alt='logo'></img>
                        </Link>
                    </div>
                    <div>
                        <span>{t('myUsual')}</span>
                    </div>
                </Col>
                <Col span={12}>
                    <div>
                        <Link to='/application/3' onClick={()=>{onChangeValue('marketing')}}>
                            <img src={marketingIcon} alt='logo'></img>
                        </Link>
                    </div>
                    <div>
                        <span>{t('marketing')}</span>
                    </div>
                </Col>
            </Row>
      </>
    )
};
  
export default HomeView;