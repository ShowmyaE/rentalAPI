import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../Common/Header/header';
import Home from '../Home/Home'
const Pages = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
        </>
    )
}
export default Pages