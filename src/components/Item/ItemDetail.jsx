import React, { usecontext, useState, useEffect, useContext } from 'react'
import { DataContext } from '../../context/Dataprovider'
import { useParams } from 'react-router-dom'
import './item.css'

const ItemDetail = () => {
  const value = useContext(DataContext)
  const [productos] = value.productos;
  const [detalles, setDetalle] = useState([])
  const params = useParams();

  useEffect(() => {
    productos.forEach(producto => {
      if (producto.id === parseInt(params.id)) {
        setDetalle(producto)
      }
    })
  }, [params.id, productos])


  console.log(detalles)


  return (
    <div className="card mb-3 " >
      <div className="row g-0">
        <section className="col-md-4">
          <img src={detalles.image} className="img-fluid rounded-start" alt="..." />
        </section>
        <div className="col-md-8">
          <div className="card-body bdy">
            <p className="card-text ">New | Three </p>
            <h5 className="card-title tit">{detalles.title}</h5>
            <p className="card-text tt">New | Three </p>
            <p className="card-text tt">Price: ${detalles.price}</p>
            { detalles.cantidad > 0 ? 
            <div>

              <p className="card-text ">Stock: {detalles.cantidad} </p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              <button className="btn btn-dark">Agregar al carrito</button>
            </div>
 
              : <p className="card-text sinp">No disponible</p>

            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default ItemDetail