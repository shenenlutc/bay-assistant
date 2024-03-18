import React from 'react';
import { Link } from 'react-router-dom'
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
                    <Link to={item.href}>
                        <div>
                            <img src={item.icon} alt='icon'></img>
                        </div>
                        <div>
                            <span>{t(item.key)}</span>
                        </div>
                    </Link>
                </li>
            })}
            </ul>
        </nav>
    )
};
  
export default SideMenu;