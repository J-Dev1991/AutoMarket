import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import CarsContainer from '../components/CarsContainer';
import Footer from '../components/Footer';


 export default function CarPage () {
    return (
        <>
        <Hero hero="carHero">
            <div class="arrow">
                <span></span>
                <span></span>
                <span></span>
    </div>
        </Hero>
        <CarsContainer/>
        {/* <Footer/> */}
        </>
    );
}

