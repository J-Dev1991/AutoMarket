import React from 'react'
import loadingImg from '../images/special/loading.gif';
export default function Loading() {
    return (
        <div className="loading">
           <h4>data loading...</h4>
           <img src={loadingImg} alt="loading"/>
        </div>
    )
}
