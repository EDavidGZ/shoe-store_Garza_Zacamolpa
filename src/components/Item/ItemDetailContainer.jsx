import React, { useState, useEffect, useContext } from 'react'
import { DataContext } from '../../context/Dataprovider'
import { useParams } from 'react-router-dom'
import './item.css'




const ItemDetailContainer = () => {
    const value = useContext(DataContext)
    const [productos] = value.productos;
    const [detalles, setDetalle] = useState([])
    const params = useParams();
    const addCarrito = value.addCarrito;
  
  
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
            <p className="card-text tt">Price: ${detalles.price}</p>
            { detalles.cantidad > 0 ? 
            <div>

              <p className="card-text ">Stock: {detalles.cantidad} </p>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', width: '40%', fontSize: '1.56rem'}}>
                <p className="card-text light" onClick={e =>  alert('se agrego')}>+ </p>
                  <p className="card-text"> {detalles.cantidad} </p>
                <p className="card-text light" onClick={e =>  alert('se agrego')}>- </p>
              </div>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              <button className="btn btn-dark cmp1" onClick={() => addCarrito(detalles.id)}>Agregar al carrito</button>
              <button className="btn btn-outline-success cmp1" onClick={e => alert('Se compro')}>Comprar</button>
            </div>
 
              : <p className="card-text sinp">No disponible</p>

            }
          </div>
        </div>

      </div>
    </div>  )
}

export default ItemDetailContainer