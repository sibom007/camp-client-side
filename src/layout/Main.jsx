import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Shard/Navber/Navber';
import Footer from '../Shard/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navber />
            <Outlet />
            <Footer />

        </div>
    );
};

export default Main;