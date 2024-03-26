import React,{useState} from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import {createHashRouter, RouterProvider, Navigate} from "react-router-dom";
import HomeView from './view/HomeView';
import {routes} from './router';
import Application from './view/Application';
import ApplicationType from "./view/ApplicationType"
import { MyContext } from './component/search/searchConst'
import ApplicationMore from './view/ApplicationMore';

const router = createHashRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <Navigate to="/application" />,
            },
            {
                path: "/application",
                element: <HomeView />,
            },
            {
                path: "application/all",
                element: <Application />,
            },
            {
                path: "application/:type",
                element: <ApplicationType />,
            },
            {
                path: "application/more",
                element: <ApplicationMore />,
            },
            ...routes.map(r=>{
                return {
                    path: r.key, 
                    element: r.view
                }
            })
          ],
    },
]);
createRoot(document.getElementById("root") as HTMLElement)
.render(<AppParameter/>);

function AppParameter() {
    const [value, setValue] = useState('');
    return (
      <React.StrictMode>
        <MyContext.Provider value={{value,onChangeValue:setValue}}>
            <RouterProvider router={router} />
        </MyContext.Provider>
      </React.StrictMode>
    )
}
  