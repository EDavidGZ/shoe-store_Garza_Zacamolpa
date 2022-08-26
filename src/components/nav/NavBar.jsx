import React from 'react'
import './nav.css'
import {GiConverseShoe} from 'react-icons/gi'
import {BsSearch} from 'react-icons/bs'
import CarWidget from './CarWidget'

const NavBar = () => {



    return (
        <div className='NavBar'>

            <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Store <GiConverseShoe/></a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" href="#">Hombre</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Mujer</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Rebaja</a>
                    </li>

                 
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-secondary" type="submit"><BsSearch /></button>
                </form>
            < CarWidget />
            </div>

            </nav>


           {/* <nav classNameName='Nav'>
            <div>
                <h2 classNameName='icon'><a href='#'>Store <GiConverseShoe classNameName='icon2'/></a></h2>
                <h2 classNameName='icon'>Store</h2>

            </div>
            <ul>
                <li><a href='#' classNameName='button type1'>Hombre</a></li>
                <li><a href='#' classNameName='button type1'>Mujer</a></li>
                <li><a href='#' classNameName='button type1'>Rebaja</a></li>
            </ul>
                <BsSearch classNameName='lupa'/>
                <form classNameName="d-flex" role="search">
                    <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button classNameName="btn btn-outline-secondary" type="submit"><BsSearch /></button>
                </form>            
                    <input type="search" placeholder='Buscar' classNameName='search'/>
            < CarWidget />
            <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"/>


          
           </nav> */}

        </div>
    )
}

export default NavBar