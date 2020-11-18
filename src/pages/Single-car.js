import React, { Component } from 'react';
import defaultBcg from '../images/special/headerBcg.jpeg';
// import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {CarContext} from '../Context';
import StyledHero  from '../components/StyledHero';
import Footer from '../components/Footer';


class AllCars extends Component {

constructor(props){
    super(props);

    this.state = {
        slug: this.props.match.params.slug,
        defaultBcg
    }
}

static contextType = CarContext;

    render() {
            const {getCar} = this.context;
            const car = getCar(this.state.slug);

            if(!car){
                return(
                    <div className="error">
                    <h3>no such car name could be found...</h3>
                    <Link to="/cars" className="btn-primary">
                        return Home
                    </Link>
                </div>
                );
            }

        const {name,gas,Doors,safety,intelliSafe,transmission,type,seats,intelliSafeStandard,climate,driverSupport,images,price,engine,
            entertainmentAndCommunication} = car;

        
        return (
            <>
            <StyledHero img={images[0] || defaultBcg}>
                <Banner title={`${name} `}>
                    <Link to="/cars" className="btn-primary">
                        back to car page
                    </Link>
                </Banner>
            </StyledHero>

         


            <section className="single-car" >
            <div>
                <div className="single-car-images ">
                    {                 
                      images.map((imgs,index) => {
                        return <img key={index} src={imgs} alt={name}/>
                        })
                    }
                </div>
            </div>
               


               <section className="car-extras">

               <article className="desc">
                    <h3>info</h3>
                    <h6>price: ${price}</h6>
                    <h6>Seats: {seats}</h6>
                    <h6>Type: {type}</h6>
                    <h6>Doors: {Doors}</h6>
                    <h6>Transmission: {transmission}</h6>
                    <h6>Gas: {gas}</h6>
                 </article>
                    
               <article className="desc">
                    <h3>engine </h3>
                    <ul className="extras">
                        {engine.map((item,index) => {
                    return <li key={index}>- {item}</li>
                    })}</ul>
                </article>

                    

                    <article className="desc">
                    <h3>safety</h3>
                    <ul className="extras">{safety.map((item,index) =>{
                        return <li key={index}>- {item}</li>
                    })}</ul>
                    </article>

                    <article className="desc">
                    <h3>climate </h3>
                    <ul className="extras">{climate.map((item,index) =>{
                        return <li key={index}>- {item}</li>
                    })}</ul>
                    </article>

                    <article className="desc">
                    <h3>intelliSafeStandard</h3>
                    <ul className="extras">{intelliSafeStandard.map((item,index) =>{
                        return <li key={index}>{item}</li>
                    })}</ul>
                    </article>

                
                    <article className="desc">
                    <h3>intelliSafe</h3>
                    <ul className="extras">
                        {intelliSafe.map((item,index)=>{
                        return <li key={index}>{item}</li>
                    })}
                    </ul>
                    </article>

                    <article className="desc">
                    <h3>Driver Support</h3>
                    <ul className="extras">{driverSupport.map((item,index)=>{
                        return <li key={index}>{item}</li>
                    })}</ul>
                    </article>

                    <article className="desc">
                    <h3>Entertainment And Communication</h3>
                    <ul className="extras">{entertainmentAndCommunication.map((item,index)=>{
                        return <li key={index}>- {item}</li>
                    })}</ul>
                    </article>


               </section>


            </section>
            <Footer/>
            </>
            
        
        );

        
    }
}


export default AllCars;