import React, {useState} from 'react'
import {nav} from '../../Data/data'
import './header.css'
import {Link} from 'react-router-dom'
const Header=()=>{
    const[navlist,setNavList]=useState(false)
    return(
        <>
        <header>
            <div className='container flex'>
                <div className='logo'>
                    <img src="https://funny-daffodil-350bc9.netlify.app/images/logo.png" alt="logo img"/>

                </div>
                <div className='nav'>
                    <ul className={navlist?"small":"flex"}>
                        {nav.map((list,index)=>(
                            <li key={index}>
                                <Link to={list.path}>{list.text}</Link>
                            </li>
                        ))}

                    </ul>
                </div>
            
            <div className='button flex'>
                <h4>
                    <span>2</span>My List
                </h4>
            
            <button className='btn1'>
                <i className='fa fa-sign-out'>sign out</i>

            </button>
            </div>
            <div className='toggle'>
            <button onClick={() => setNavList(!navlist)}>{navlist ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
          </div>
        
        </header>
        </>

)
}
export default Header