import React, { Component } from 'react';
import { createBrowserRouter } from "react-router";
import Roots from '../pages/Roots/Roots';
import Errorpage from '../pages/Errorpage/Errorpage';
import Home from '../pages/Home/Home';


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Roots,
        errorElement: <Errorpage></Errorpage>,
        children:[
            {
            index: true,
            path: "/",
            Component: Home 
            }
        ]
    },
]);