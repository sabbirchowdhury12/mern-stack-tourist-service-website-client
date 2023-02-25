import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Service from "../Pages/Service/Service";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import { serviceDetails } from "../utilities/APIRoutes";

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
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/service/:id',
                loader: async ({ params }) => fetch(`${serviceDetails}/${params.id}`),
                element: <ServiceDetails />
            },
        ]
    }
]);