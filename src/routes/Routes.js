import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../component/Pages/Category/Home/Home";
import Category from "../component/Pages/Category/Category";
import Login from "../component/Login/Login";
import Register from "../Register/Register";
import Blog from "../component/Blog/Blog";
import Faq from "../component/Faq/Faq";
import Courses from "../component/Pages/Category/Courses/Courses";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },

            {
                path: '/courses/:id',
                element: <Courses></Courses>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.category_id}`),
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
                path: '/faq',
                element: <Faq ></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },



            {
                path: '*',
                element: <div className="mt-5 pt-5 text-center pb-5"> <h2 className="pb-5 mb-5">404!!! <br /> Page Not Found </h2> </div>
            }

        ]
    }
])