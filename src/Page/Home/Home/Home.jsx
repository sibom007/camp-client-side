import React from 'react';
import Carcel from '../Carcel/Carcel';
import { ParallaxProvider } from 'react-scroll-parallax';
import Banner from '../Banner/Banner';
import Extrasection from '../ExtraSection/Extrasection';
import HomeClassdata from '../Class/HomeClassdata';

const Home = () => {
    return (
        <div>
            <Banner />
            <ParallaxProvider>
                <Carcel />
            </ParallaxProvider>
            <HomeClassdata />
            <Extrasection />
        </div>
    );
};

export default Home;