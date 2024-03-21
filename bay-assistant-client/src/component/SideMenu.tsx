import React from 'react';
import { NavLink } from 'react-router-dom'
import {routes} from '../router';
import './SideMenu.css';
import { useTranslation } from "react-i18next";
import "../i18n";

const ulStyle : React.CSSProperties = {
    padding: 0,
    textAlign: 'center',
    listStyle: 'none'
}


const SideMenu: React.FC = () => {
    const { t } = useTranslation();

    return (
        <nav>
            <ul style={ulStyle} id="side-menu">
            {
                routes.map((item:any)=>{
                return <li key={item.key} >
                        <NavLink to={item.href}>
                            <div className="menu-content">
                                <div>
                                    <img src={item.icon} alt='icon'></img>
                                </div>
                                <div>
                                    <span>{t(item.key)}</span>
                                </div>
                            </div>    
                        </NavLink>
                    <div className="menu-placeholder"></div>
                </li>
            })}
            </ul>
        </nav>
    )
};
  
export default SideMenu;