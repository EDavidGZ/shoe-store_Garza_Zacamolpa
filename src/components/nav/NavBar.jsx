import React, {useContext} from 'react'
import './nav.css'
import { GiConverseShoe } from 'react-icons/gi'
import { BsSearch } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import {BsCart4} from 'react-icons/bs'
import { DataContext } from '../../context/Dataprovider'


const NavBar = (props) => {
    const value = useContext(DataContext)
    const [menu, setMenu] = value.menu;
    const [carrito] = value.carrito;


    const toogleMenu = () => {
        setMenu(!menu)
    }

    return (
        <div className='navBar'>
            <h1>{props.title}</h1>

            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        Store <GiConverseShoe />
                    </Link>

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link to="/" className="nav-link">Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/producto" className="nav-link">Detalles</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to="/producto" className="nav-link">Detalles</Link>
                        </li> */}


                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-secondary" type="submit"><BsSearch /></button>
                    </form>
                    <div className='marker'  onClick={toogleMenu}>
                        <BsCart4 className='superMarker'/>
                        <span className='item__total'>{carrito.length}</span>
                    </div>
                </div>

            </nav>


        </div>
    )
}

export default NavBar