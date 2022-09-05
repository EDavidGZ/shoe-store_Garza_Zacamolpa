import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/Dataprovider';


const ItemCount = ({
  id,
  title,
  price,
  image,
  cantidad,
}) => {
  const value = useContext(DataContext)
  const addCarrito = value.addCarrito;




  return (
    <div className="card cd2 tarjeta crth" style={{ width: "20rem" }}>
      <Link to={`/producto/${id}`}>
        <div>
          <img src={image} alt={title} className="card-img-top" />
        </div>
      <div className="card-body">
        <h1 className="card-text tt1 ">{title}</h1>
        <div className='tdtp'>
          <p className="card-text tt1">${price}</p>
          <p className="card-text green">Envio gratis </p>
        </div>

        </div>   
       </Link>

      {cantidad > 0 ?
        <div className="buttom">
          <button className='btn btn-dark' onClick={() => addCarrito(id)}>
            Añadir al carrito
          </button>
        </div>

        : <p className="card-text sinp">No disponible</p>

      }

    </div>


  )
}

export default ItemCount