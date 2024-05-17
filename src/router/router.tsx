import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Homepage from "../pages/Homepage/Homepage";
import Users from "../pages/Users";
import Posts from "../pages/Posts";
import Comments from "../pages/Comments";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {index: true, element: <Homepage />},
            {path: 'users', element: <Users/>},
            {path: 'posts', element: <Posts/>},
            {path: 'comments', element: <Comments/>}
        ]
    }
])