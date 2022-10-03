import React, { useContext, useState } from 'react'
import './nav.css'
import { GiConverseShoe } from 'react-icons/gi'
import { BsSearch } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { BsCart4 } from 'react-icons/bs'
import { CartContext } from '../../context/CartContext'
import CarWidget from './CarWidget'


const NavBar = (props) => {
    const value = useContext(CartContext)
    const [menu, setMenu] = value.menu;
    const filtrar = value.filtrar;
    const [usuarios] = value.usuarios;

    const [busqueda, setBusqueda] = useState('')


    const toogleMenu = () => {
        setMenu(!menu)
    }


    const handleChange = e => {
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }

    return (
        <div className='navBar'>

            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        Store <GiConverseShoe />
                    </Link>

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link to="/producto" className="nav-link">Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contacto</Link>
                        </li>{/*
                         <li className="nav-item">
                            <Link to="/producto" className="nav-link">Detalles</Link>
                        </li> */}


                    </ul>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            placeholder="Search"
                            value={busqueda}
                            onChange={handleChange}
                        />
                        {usuarios.length > 0 ?

                            <Link to='/busqueda' className="btn btn-outline-secondary">
                                <BsSearch />
                            </Link>
                            :
                            <Link to='/producto' className="btn btn-outline-secondary">
                                <BsSearch />
                            </Link>
                        }

                    </form>
                    <CarWidget />
                <GiHamburgerMenu onClick={toogleMenu} className='burguer'/>
                </div>

             
            </nav>


        </div>
    )
}

export default NavBar