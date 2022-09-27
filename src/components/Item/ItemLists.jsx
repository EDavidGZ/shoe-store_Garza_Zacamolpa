import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ItemCount from './ItemCount';


const ItemList = ({
  id,
  title,
  price,
  image,
  cantidad,
}) => {





  return (
    <div className="card cd2 tarjeta" style={{ width: "80%" }}>
      <Link to={`/producto/${id}`}>
        <div>
          <img src={image} alt={title} className="card-img-top" />
        </div>
      </Link>
      <div className="card-body">
        <h1 className="card-text tt1 ">{title}</h1>
        <div className='tdtp'>
          <Link to={`/producto/${id}`}>

            <p className="card-text tt1">${price}</p>
            <p className="card-text green">Envio gratis </p>
          </Link>

        </div>
      </div>
    </div>


  )
}

export default ItemList