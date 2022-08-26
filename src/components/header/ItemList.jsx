import React, { useEffect, useState } from 'react'
import './header.css'
import ItemCount from './ItemCount'



const ItemList = ({ products }) => {


  function consultarPromesa(confirmar) {
    return new Promise((resolve, reject) => {
      if (confirmar) {
        resolve(products)
      } else {
        reject("Sin productos")
      }
    })
  }


  const [producto, setProducto] = useState([]);

  function cargarComponente() {
    consultarPromesa(true)
      .then(data => {
        setProducto(data.map((product, index) =>
          <div className="card tarjeta" style={{ width: "16rem" }} key={index}>
            <img src={`${product.img}`} className="card-img-top" alt="..." />
            <div className="card-body" >
              <p className="card-text">{product.name}  ${product.price}</p>
              <p className="card-text">stock: {product.stock} <ItemCount /></p>
            </div>
          </div>
        ))

      })
      .catch(error => {
        console.error(error);
      })
  }

  useEffect(() => {
    cargarComponente()


  }, [])


  return (
    <div className='cont'>
      {producto}

    </div>
  )
}

export default ItemList