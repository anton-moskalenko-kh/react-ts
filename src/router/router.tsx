import {createBrowserRouter, RouteObject} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import UserPage from "../pages/UserPage/UserPage";
import PostPage from "../pages/PostPage/PostPage";
import HomePage from "../pages/HomePage";

const routes: RouteObject[] = [
    {
        path: '', element: <MainLayout/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'users/:id', element: <UserPage/>},
            {path: 'posts/:id', element: <PostPage/>}
        ]
    }
]

export const router = createBrowserRouter(routes)