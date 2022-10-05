import React, {  useContext } from 'react'
import { BsBag } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './nav.css'
import { CartContext } from '../../context/CartContext'




const CarWidget = () => {

  const value = useContext(CartContext)
  const [carrito] = value.carrito;
  const [cartValor] = value.cartValor;







  return (

    <div className='marker' >
    <Link to='/carrito'>
     <BsBag className='superMarker' />
    {carrito.length > 0 ?   <span className='item__total'>{cartValor}</span> :  <></>
}

    </Link>

    </div>


  )
}

export default CarWidget