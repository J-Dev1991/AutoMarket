import React from 'react'
import {address} from '../serviceAddress/address';
import styled from 'styled-components';

export default function location() {
 
    return (
        <>
      
         <WrapAddress className="row">
                {
                   address.map((item,index) => {
                   
                       return (
                        <div key ={index} className="card col col-10 col-lg-4 my-2">
                        <div className="card-body">
                        <ul>
                        <li className="list">
                             <h3 >Name: {item.name}</h3>
                             <h4>Street: {item.street}</h4>
                             <h4>Number: {item.number}</h4>
                             <h4>Email: {item.email}</h4>
                             <h3>Tel: {item.tel}</h3>
                         </li>
                         </ul>
                        </div>
                        </div>
                       );
                })
                };
           
                      </WrapAddress>
           
        </>
    )
}

const WrapAddress = styled.div `
display: flex;
justify-content: space-between;
align-items: center;
color: grey;

.card {
    padding: 0.1rem 0.1rem;
}
.list{
    padding: 1.5rem 1rem;
    color: grey;
}

.list:nth-child(even) {
  background: var(--primaryColor);
}

ul{
list-style-type: none;
}

`

