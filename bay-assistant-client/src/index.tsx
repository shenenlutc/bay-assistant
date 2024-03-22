import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import {createBrowserRouter, createHashRouter, RouterProvider, Navigate} from "react-router-dom";
import HomeView from './view/HomeView';
import {routes} from './router';
import Application from './view/Application';
import ApplicationType from "./view/ApplicationType";

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
.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);