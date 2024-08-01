import React from 'react'

import Heading from '../../Common/Heading';
import { useState, useEffect } from "react";
import './location.css'
const Location=()=>{

    const [location, setLocation] = useState([]);

    useEffect( () => {
        getLocation()
    },[]);

    async function getLocation() {
        const url = 'http://localhost:5000/location'
        const options = {
            method: 'GET'
        }
        const response = await fetch(url, options)
        const data = await response.json()
        console.log("DATA", data)
        if (response.ok === true) {
            setLocation(data)
        }
    }
    return(
        <>
        <section className="location padding">
        <div className='contanier'>
        <Heading title='Explore By Location' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
        <div className='content grid3 mtop'>
        {location.map((item,index)=>(
            <div className='box' key={index}>
                  <img src={item.cover} alt='' />
                <div className='overlay'>
                  <h5>{item.name}</h5>
                  <p>
                    <label>{item.Villas}</label>
                    <label>{item.Offices}</label>
                    <label>{item.Apartments}</label>
                  </p>
                </div>
                </div>
        ))}
            </div>
        </div>
        </section>
        </>
    )

}
export default Location