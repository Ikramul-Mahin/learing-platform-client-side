import { createBrowserRouter } from "react-router-dom";
import Faq from "../component/Faq/Faq";
import Blog from "../component/Header/Blog/Blog";
import Home from "../component/Header/Home/Home";
import Login from "../component/Header/Login/Login";
import RightNav from "../component/RightNav/RightNav";

import Main from "../layout/Main";
import Register from "../Register/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <PrivateRoute><Faq></Faq></PrivateRoute>
            },
            {
                path: 'rightNav',
                loader: () => {

                },
                element: <RightNav></RightNav>
            }

        ]
    }
])