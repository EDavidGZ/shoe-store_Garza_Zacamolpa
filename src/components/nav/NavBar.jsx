import React from 'react'
import './nav.css'
import {GiConverseShoe} from 'react-icons/gi'
import {BsSearch} from 'react-icons/bs'
import CarWidget from './CarWidget'

const NavBar = () => {



    return (
        <div className='NavBar'>
           <nav className='Nav'>
            <div>
                <h2 className='icon'><a href='#'>Store <GiConverseShoe className='icon2'/></a></h2>
                {/* <h2 className='icon'>Store</h2> */}

            </div>
            <ul>
                <li><a href='#' className='button type1'>Hombre</a></li>
                <li><a href='#' className='button type1'>Mujer</a></li>
                <li><a href='#' className='button type1'>Rebaja</a></li>
            </ul>
            <p className='br'>
                <BsSearch className='lupa'/>
                <input type="search" placeholder='Buscar' className='search'/>
            </p >
            < CarWidget />

          
           </nav>

        </div>
    )
}

export default NavBar