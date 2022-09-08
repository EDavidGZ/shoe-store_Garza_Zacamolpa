import React, { useState, useEffect, useContext } from 'react'
import { DataContext } from '../../context/Dataprovider'
import ItemCount from './ItemCount';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './item.css'




const ItemDetail = () => {
    const value = useContext(DataContext)
    const [productos] = value.productos;
    const [detalles, setDetalle] = useState([])
    const [valor, setValor] = useState(1)
    const params = useParams();
    const addCarrito = value.addCarrito;

   
  
  
    useEffect(() => {
      productos.forEach(producto => {
        if (producto.id === parseInt(params.id)) {
          setDetalle(producto)
        }
      })
    }, [params.id, productos])
    
   const agregarCarrito = (id,valor) => {
      const productosCarrito = {id: id, valor: valor}
      console.log(productosCarrito)
    }

    const cantidadPoducto = (operacion) => {
      if( operacion === '+'){
        if(valor < detalles.cantidad){
          setValor(valor + 1)
        }
      } else {
        if(valor > 1){
          setValor(valor - 1)
        }
      }
    }
  
  


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
                <p className="card-text light" onClick={e =>  cantidadPoducto('+')}>+ </p>
                  <p className="card-text"> {valor} </p>
                <p className="card-text light" onClick={e =>  cantidadPoducto('-')}>- </p>
              </div>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              <button className="btn btn-dark cmp1" onClick={() => addCarrito(detalles.id)}>Agregar al carrito</button>
              <Link to='/carrito'> <button className="btn btn-outline-success cmp1" onClick={() => agregarCarrito(detalles.id, valor)}>Comprar</button></Link>
            </div>
 
              : <p className="card-text sinp">No disponible</p>

            }
          </div>
        </div>

      </div>
      <ItemCount agregarCarrito={agregarCarrito} cantidadPoducto={cantidadPoducto} valor={valor}/>
    </div>  )
}

export default ItemDetail