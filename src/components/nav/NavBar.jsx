import React from 'react'
import './nav.css'
import {GiConverseShoe} from 'react-icons/gi'
import {BsCart4} from 'react-icons/bs'


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
            
            <input type="search" placeholder=' Search here' className='search'/>
            <BsCart4 className='car'/>
          
           </nav>

        </div>
    )
}

export default NavBar