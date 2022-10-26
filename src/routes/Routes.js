import { createBrowserRouter } from "react-router-dom";
import Courses from "../component/Courses/Courses";
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
                element: <Courses></Courses>
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
                element: <RightNav></RightNav>
            },
            {
                path: '/courses',
                loader: async () => {
                    return fetch('http://localhost:5000/details')
                },
                element: <Courses></Courses>
            }

        ]
    }
])