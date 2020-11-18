import React, { Component } from 'react';
import logo from '../../images/special/fleet.jpg';
import {FaAlignRight} from'react-icons/fa';
import {Link} from 'react-router-dom';
import Footer from '../Footer';
import './style.css';

export default class NavBar extends Component {

    state = {
        isOpen: false
    }

    handleToggle = () =>{
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    render() {
    
        return <>
            <nav className="navbar">
              <div className="nav-center">
                 <div className="navbar-header">
                    <Link to="/">
                        <img src={logo} alt="Car Dealer"/>
                        </Link><button  type="button" className="nav-btn"
                         onClick={this.handleToggle}>  
                            <FaAlignRight className="nav-icon"/>
                            </button>  

                 </div>

                 <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                     <li><Link to="/home">Home</Link></li>
                     <li><Link to="/cars">Cars</Link></li>

                 </ul>
              </div>
            </nav>

            <Footer/>
        </>
    }
}

