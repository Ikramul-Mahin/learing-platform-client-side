import { createBrowserRouter } from "react-router-dom";
import CourseCardDetails from "../component/Courses/CourseCardDetails";
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
                element: <Faq></Faq>
            },
            {
                path: 'rightNav',
                element: <RightNav></RightNav>
            },
            {
                path: '/courses',
                loader: async () => {
                    return fetch('http://localhost:5000/courses')
                },
                element: <Courses></Courses>
            },
            {
                path: '/detail/:id',
                loader: async ({ params }) => {
                    fetch(`http://localhost:5000/course/${params.id}`)

                },
                element: <CourseCardDetails></CourseCardDetails>,

            },
            {
                path: '*',
                element: <div className="mt-5 pt-5 text-center pb-5"> <h2 className="pb-5 mb-5">404!!! <br /> Page Not Found </h2> </div>
            }

        ]
    }
])