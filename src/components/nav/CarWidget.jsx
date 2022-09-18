import React, { useState, useContext } from 'react'
import { BsBag } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './nav.css'
import { CartContext } from '../../context/CartContext'




const CarWidget = () => {

  const value = useContext(CartContext)
  const [carrito] = value.carrito;
  const [cartValor] = value.cartValor;

  console.log(cartValor)



  const [contador, setContador] = useState(0)
  const compra = (e) => {
    setContador(contador + 1)
  }


  return (

    <div className='marker'>
    <Link to='/carrito'>
     <BsBag className='superMarker' />
    {carrito.length > 0 ?   <span className='item__total'>{cartValor}</span> :  <></>
}

    </Link>

    </div>

    // <div>
    //      <h3 onClick={compra}>
    //             <BsCart4 className='car'/>
    //             { contador > 0 && contador < 10 ? (
    //                 <p className='contador'>{contador}</p>
    //                 )
    //                 : contador > 9 ? (
    //                 <p className='contador'>9+</p>
    //             )
    //              : 0 }
    //         </h3>
    // </div>
  )
}

export default CarWidget