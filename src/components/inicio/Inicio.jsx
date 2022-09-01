import React from 'react'
import { Link } from 'react-router-dom'
import inicio from '../../images/inicio.jpg'
import './inicio.css'

const Inicio = () => {
  return (
    <div className="inicio">
      <Link to='/'>
        <h1>Inicio</h1>
      </Link>
      <Link to='/producto'>
      <h1>PRODUCTOS</h1>
      </Link>
      <img src={inicio} alt="Inicio" />
    </div>
  )
}

export default Inicio