import React, { Component } from 'react'
import { CarContext } from '../Context';
import Loading from './Loading';
import Cars from './Car';
import Title from './Titles';

class FeaturedCar extends Component {
    // create a static object of CarContext
    static contextType = CarContext;
    render() {

        //destructuring
        let {loading, featuredCars: cars} = this.context;

        //cars rendered outside 
        cars = cars.map(car => {
            return <Cars  key={car.id} car={car} />
        })


        return (
       
            <section className="featured-car">
               <Title   title="featured Cars"/>
               <div className="featured-car-center ">
               {loading ? <Loading/> : cars}
               </div>
                
            </section>
        );
    }
}

export default FeaturedCar;