import React from 'react'
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedCar from '../components/FeaturedCars';
import Footer from '../components/Footer';


function Home() {
   return (
   <>
  
    <Hero>
        <Banner title="Luxurious cars" subtitle="check out the cars of your dream">
                <Link to="/cars" className="btn-primary">Our Cars</Link>
         </Banner>
    </Hero>
    <Services />
    <FeaturedCar/>
    <Footer />
   
   
    </>
   );
};

export default Home;
