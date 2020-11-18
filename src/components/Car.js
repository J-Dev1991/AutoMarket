import React from 'react';
import {Link} from 'react-router-dom';
import {FaGasPump,FaCogs,FaCar} from 'react-icons/fa'
import defaultImg from '../images/special/headerBcg.jpeg';

//checking if the prop is passed
import PropTypes from "prop-types";

 export default function Car({ car }) {

    
     const {images,slug, name , price, Gas, type} = car;

    return (
        <article className="car">
           <div className="img-container">
                <img src={images[0] || defaultImg} alt="single car"/>
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>with tax</p>
                </div>
                <Link to={`/cars/${slug}`} className="btn-primary car-link">
                    Features
                </Link>
           </div>
       
            <div></div>
           <div className="card-footer text-capitalize">
              <p className="car-info">{name}</p>
              <p><FaCar className="fas fa-car"/>{type}</p>
              {/* <p><span><FaCogs className="fas fa-cogs"/></span>{transmission}</p> */}
              <p><FaGasPump className="fas fa-gas-pump"/>{Gas}</p>
            </div>
           
        </article>
        
    );
}

Car.propTypes = {
    car:PropTypes.shape({
        name:PropTypes.string.isRequired,
        transmission:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
        type:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired
    })
};
// export default Car();