import React, { Component } from 'react'
import Title from './Titles';
import {FaCogs,FaCarBattery,FaCarCrash} from 'react-icons/fa';
// import Source from '../video/videoBcg';
import VideoPlay from '../video/VideoBcg.mp4';
import {Link} from 'react-router-dom';

export default class Services extends Component {

    

    state={
        services:[
            {
                icon:<FaCogs/>,
                title:"car repair services",
                info:"we optionally offers emergency repair services to our client",

            },
            {
                icon:<FaCarBattery/>,
                title:"Battery Replacement",
                info:"battery replacent services are also available",
               
            },
            {
                icon:<FaCarCrash/>,
                title:"Road Side Assistance",
                info:"Road side assistance services at our clients disposal",
            
            }
        ]
    }
    render() {
        return (
       
            <section className="services">
                    <Title title="services" />

                <video className="video-item" autoPlay loop muted>
                        <source src={VideoPlay} type="video/mp4"/>
                             Your browser does not support video tag
                </video>
                 <div className="services-center">
                     {this.state.services.map((item,index) => {
                        return (
                            <article key={index} className="services">
                                <Link to="/location">
                                    <span className="service-icon">{item.icon}</span>        
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                                </Link>
                               
                               
                            </article>
                        );
                    })}
                </div>
            </section>
        )


    }
}
