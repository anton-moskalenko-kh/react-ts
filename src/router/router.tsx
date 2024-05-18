import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Homepage from "../pages/Homepage/Homepage";
import Users from "../pages/Users";
import Posts from "../pages/Posts";
import Comments from "../pages/Comments";
import PostsOfUser from "../pages/PostsOfUser";
import CommentsOfPost from "../pages/СommentsOfPost";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {index: true, element: <Homepage />},
            {path: 'users', element: <Users/>},
            {path: 'users/:id', element: <PostsOfUser/>},
            {path: 'posts', element: <Posts/>},
            {path: 'posts/:id', element: <CommentsOfPost/>},
            {path: 'comments', element: <Comments/>}
        ]
    }
])