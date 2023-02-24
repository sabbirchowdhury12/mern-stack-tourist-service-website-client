import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Share/Footer/Footer';
import Navbar from '../components/Share/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;