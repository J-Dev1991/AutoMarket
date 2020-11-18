import React from 'react'
import {FaFacebookSquare,FaInstagram,FaLinkedin,FaTwitter} from 'react-icons/fa';
// import {Link} from 'react-router-dom';

function Footer() {
    return (
        <section className="footerSection">
            <div className="wrapAllFooter">
                <div className="footer-link"><a className="resizer" target="_blank" href="http://www.facebook.com"><FaFacebookSquare/></a></div>
                <div><a className="resizer" target="_blank" href="https://www.instagram.com/accounts/login"><FaInstagram/></a></div>
                <div><a className="resizer" target="_blank" href="https://twitter.com/login"><FaTwitter/></a></div>
                <div><a className="resizer" target="_blank" href="https://www.linkedin.com/login"><FaLinkedin/></a></div>
            </div>
        </section>
    )
};

export default Footer;
