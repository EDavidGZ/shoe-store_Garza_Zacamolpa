import React from 'react'
import { Link } from 'react-router-dom';


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
        <div className="card-body">
          <h1 className="card-text tt1 ">{title}</h1>
          {cantidad > 0 ?
            <div className='tdtp'>
              <p className="card-text tt1">${price}</p>
              <p className="card-text green">Envio gratis </p>
            </div>
            : <p className="card-text sinp">No disponible</p>}
        </div>
      </Link>
    </div>


  )
}

export default ItemList