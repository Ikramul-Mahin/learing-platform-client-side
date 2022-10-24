import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Header/Home/Home";
import Login from "../component/Header/Login/Login";

import Main from "../layout/Main";
import Register from "../Register/Register";

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
            }
        ]
    }
])