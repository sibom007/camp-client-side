import React from 'react';
import Carcel from '../Carcel/Carcel';
import { ParallaxProvider } from 'react-scroll-parallax';
import Banner from '../Banner/Banner';
import Extrasection from '../ExtraSection/Extrasection';
import HomeClassdata from '../Class/HomeClassdata';
import Instackhome from '../Instacktorhome/Instackhome';
import { Helmet } from 'react-helmet-async';
import { useState } from "react";
import { motion } from "framer-motion";
import './Home.css'

const Home = () => {

    const [isOn, setIsOn] = useState(false);
    const [Theme, setTheme] = useState('light');

    const toggleSwitch = () => {
        setIsOn(!isOn)
        setTheme(Theme === "light" ? "dark" : "light")
    };



    return (
        <div data-theme={Theme}>
            <Helmet>
                <title>Adventure Campus || Home</title>
            </Helmet>
            <div className="switch absolute z-40 mt-72 md:mt-2 ml-2" data-isOn={isOn} onClick={toggleSwitch}>
                <motion.div className="handle" layout transition={spring} />
            </div>

            <Banner />
            <ParallaxProvider>
                <Carcel />
            </ParallaxProvider>
            <HomeClassdata />
            <Extrasection />
            <Instackhome />
        </div>
    );
};

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
};

export default Home;

