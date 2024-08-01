import React from 'react'
import Heading from '../../Common/Heading'
import FeaturedCard from './FeaturedCard'
import './Featured.css'
const Featured=()=>{
    return(
     <>
     <section className='featured background'>
        <div className='container'>
            <Heading title='Featured Property Types' subtitle="Find All type of Property"/>
            <FeaturedCard/>
            </div></section></>
    )
}
export default Featured