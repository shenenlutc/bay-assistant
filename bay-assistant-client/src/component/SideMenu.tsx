import React, { MouseEventHandler, useState } from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { useNavigate, Routes, Route, Link } from 'react-router-dom'
import routes from '../router';
import './SideMenu.css';

const ulStyle : React.CSSProperties = {
    padding: 0,
    textAlign: 'center',
    listStyle: 'none'
}



const handleClick = (item:any) => {
    // navigate(item.href)
}

const SideMenu: React.FC = () => {
    return (
        <nav>
            <ul style={ulStyle} id="side-menu">
            {
                routes.map((item:any)=>{
                return <li key={item.key}>
                    <Link to={item.href}>
                        <div>
                            <img src={item.icon} alt='icon'></img>
                        </div>
                        <div>
                            <span>{item.label}</span>
                        </div>
                    </Link>
                </li>
            })}
            </ul>
        </nav>
    )
};
  
export default SideMenu;