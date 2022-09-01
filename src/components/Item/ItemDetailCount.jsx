import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/Dataprovider';


const ItemCount = ({
  id,
  title,
  price,
  image,
  category,
  cantidad,
 }) => {
  const value = useContext(DataContext)
  const addCarrito = value.addCarrito;


   

  return (
    <div className="card tarjeta crth" style={{ width: "26rem" }}>
      <Link to={`/producto/${id}`}>
      <div>
        <img src={image} alt={title} className="card-img-top"/>
      </div>
      </Link>
    <div className="card-body">
      <h1 className="card-text">{title}</h1>
      <p className="card-text">{category} </p>
      <p className="card-text">${price}</p>
    </div>
    <div className="buttom">
      <button className='btn btn-outline-primary' onClick={() => addCarrito(id)}>
        Añadir al carrito
      </button>
      <div>
          <a href={`/producto/${id}`} className='btn' >Vista</a>
      </div>
    </div>
  </div>


  )
}

export default ItemCount