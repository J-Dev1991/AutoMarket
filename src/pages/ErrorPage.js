import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Footer from '../components/Footer';

export const ErrorPage = () => {
    return <>
        <Hero>
            <Banner title="404" subtitle="page not found">
                <Link to="/home" className="btn-primary"> return home</Link>
                <Link to="/cars" className="btn-primary"> return to cars</Link>              
            </Banner>
        </Hero>
        <Footer/>
</>
}

export default ErrorPage;