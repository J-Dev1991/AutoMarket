import React from 'react'
import {useContext} from 'react';
import {CarContext} from '../Context';
import Title from '../components/Titles';
// get all unique values

const getUniqueValue = (items,value)  => {
    return [...new Set(items.map(item => item[value]))] // set only accept unique values
}

export default function CarsFilter({cars}) {
    const context = useContext(CarContext);
    const {handleChange,type,price,minPrice,maxPrice,minAmount,maxAmount,transmission}
    = context;

    //get uniques type
    let types = getUniqueValue(cars, 'type')
    let trans = getUniqueValue(cars, 'transmission')

    //add all 
    types = ['all', ...types];
    trans = ['all', ...trans];

    //map to jsx
types = types.map((item,index) => {
    return <option value={item} key={index}>{item}</option>
})

//map to jsx
trans = trans.map((item,index) => {
    return <option value={item} key={index}>{item}</option>
})


    return (
        <section className="filter-container">
            <Title title="search cars" />
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                <label htmlFor="type">car type</label>
                <select name="type" id="type" value={type}
                className="form-control" onChange={handleChange}>
                    {types}
                </select>
                </div>
                {/* end of select type */}

                {/* select transmission */}
                <div className="form-group">
                <label htmlFor="transmission">transmission</label>
                <select name="transmission" id="transmission" value={transmission}
                className="form-control" onChange={handleChange}>
                    {trans}
                </select>
                </div>
                {/* end of select trnsmission */}

                {/* start of car price */}
                <div className="form-group">
    <label htmlFor="Price">car price {price}</label>
                    <input type="range" name="price"
                    min={minPrice} max={maxPrice} id="price" value={price}
                    onChange={handleChange} className="form-control"/>
                </div>
                {/* end of car price */}
            </form>
        </section>
    )
}
