import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Service/Service";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <Contact />
            },
            {
                path: '/contact',
                element: <blog />
            },
            {
                path: '/blog',
                element: <blog />
            },
            {
                path: '/services',
                element: <Service />
            }
        ]
    }
]);