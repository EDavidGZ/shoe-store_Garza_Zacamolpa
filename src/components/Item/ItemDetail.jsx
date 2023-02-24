import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useParams } from 'react-router-dom'
import './item.css'
import ItemCount from './ItemCount';




const ItemDetail = () => {
  const value = useContext(CartContext)
  const [productos] = value.productos;
  const [detalles, setDetalle] = useState([])
  const params = useParams();





   const list =  productos.map(producto => Object.values(producto))
  const nId = params.id
   const buy = list[nId]
      // if (producto.id === params.id) {
      //   console.log(producto.id)
      //   setDetalle(producto)
      // }
      const title = buy[1]
      const img = buy[3]
      const cantidad = buy[2]
      const id = buy[0]
      
      
      
      
      console.log(buy)
   


  return (
    <div className="card cd1 mb-3 " >
      <div className="row g-0">
        <section className="foto">
          <img src={img} style={{ width: '100%' }} />
        </section>
        <div className="col-md-8">
          <div className="card-body bdy">
            <p className="card-text ">New | Three </p>
            <h5 className="card-title tit">{detalles.title}</h5>
            <p className="card-text tt">New | Three </p>
            <p className="card-text tt">Price: ${detalles.price}</p><br /><br /><br /><br />
            {cantidad > 0 ?
              <ItemCount cantidad={cantidad} id={id} />
              : <p className="card-text sinp">No disponible</p>

            }
          </div>
        </div>
      </div>
    </div>)
}

export default ItemDetail