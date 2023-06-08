import React from 'react';
import Carcel from '../Carcel/Carcel';
import { ParallaxProvider } from 'react-scroll-parallax';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <h1>Hello</h1>
            <Banner />
            <ParallaxProvider>
                <Carcel />
            </ParallaxProvider>

        </div>
    );
};

export default Home;