import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './item.css'
import ItemCount from './ItemCount';




const ItemDetail = () => {
    const value = useContext(CartContext)
    const [productos] = value.productos;
    const [detalles, setDetalle] = useState([])
    const params = useParams();
    const [car, setCar] = useState(false)

   
  
  
    useEffect(() => {
      productos.forEach(producto => {
        if (producto.id === parseInt(params.id)) {
          setDetalle(producto)
        }
      })
    }, [params.id, productos])
    
  
  


  return (
    <div className="card cd1 mb-3 " >
      <div className="row g-0">
        <section className="col-md-4">
          <img src={detalles.image} className="img-fluid rounded-start" alt="..." />
        </section>
        <div className="col-md-8">
          <div className="card-body bdy">
            <p className="card-text ">New | Three </p>
            <h5 className="card-title tit">{detalles.title}</h5>
            <p className="card-text tt">New | Three </p>
            <p className="card-text tt">Price: ${detalles.price}</p><br /><br /><br /><br />
            { detalles.cantidad > 0 ? 
            <ItemCount cantidad={detalles.cantidad} id={detalles.id} />
              : <p className="card-text sinp">No disponible</p>

            }
          </div>
        </div>
      </div>
    </div>  )
}

export default ItemDetail