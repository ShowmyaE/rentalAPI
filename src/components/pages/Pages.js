import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../Common/Header/header';
import Home from '../Home/Home'
import About from '../about/about'
import Blog from "../blog/blog"
import Pricing from "../pricing/Pricing"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import Footer from "../Common/footer/Footer"


const Pages = () => {
    return (
        <>
            <Header />
            <Routes>
           
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/blog" element={<Blog/>} />
                <Route exact path='/services' element={<Services/>}/>
                <Route exact path='/blog'element={<Pricing/>}/>
          <Route exact path='/pricing' element={<Contact/>} />
        

            </Routes>
            <Footer/>
        </>
    )
}
export default Pages