import React from 'react'
import { Link } from 'react-router-dom'
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
    </div>
  )
}

export default Inicio