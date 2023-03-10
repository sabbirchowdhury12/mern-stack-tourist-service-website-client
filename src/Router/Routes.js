import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReview from "../Pages/MyReview/MyReview";
import Register from "../Pages/Register/Register";
import Service from "../Pages/Service/Service";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import { serviceDetails } from "../utilities/APIRoutes";
import PrivateRoute from "./PrivateRoute";

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
                element: <Blog />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/services',
                element: <Service />
            },
            {
                path: '/myreview',
                element: <PrivateRoute><MyReview /></PrivateRoute>
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
                path: '/addService',
                element: <AddService />
            },
            {
                path: '/service/:id',
                loader: async ({ params }) => fetch(`${serviceDetails}/${params.id}`),
                element: <ServiceDetails />
            },
        ]
    }
]);