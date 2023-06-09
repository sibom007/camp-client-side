import React from 'react';
import Carcel from '../Carcel/Carcel';
import { ParallaxProvider } from 'react-scroll-parallax';
import Banner from '../Banner/Banner';
import Extrasection from '../ExtraSection/Extrasection';

const Home = () => {
    return (
        <div>
            <Banner />
            <ParallaxProvider>
                <Carcel />
            </ParallaxProvider>
            <Extrasection />
        </div>
    );
};

export default Home;