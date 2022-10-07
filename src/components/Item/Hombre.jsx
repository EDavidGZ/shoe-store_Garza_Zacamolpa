import React, { useContext } from 'react'
import './item.css'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Hombre = () => {
  const value = useContext(CartContext)
  const [hombre] = value.hombre
  return (
    <>
      <div className='cont'>
        {
          hombre.map((producto) => (
            <div className="card cd2 tarjeta" key={producto.id} style={{ width: "80%" }}>
              <Link to={`/producto/${producto.id}`}>
                <div>
                  <img src={producto.image} alt={producto.title} className="card-img-top" />
                </div>
                <div className="card-body">
                  <h1 className="card-text tt1 ">{producto.title}</h1>
                  {producto.cantidad > 0 ?
                    <div className='tdtp'>
                      <p className="card-text tt1">${producto.price}</p>
                      <p className="card-text green">Envio gratis </p>
                    </div>
                    : <p className="card-text sinp">No disponible</p>}
                </div>
              </Link>
            </div>

          ))

        }
      </div>
    </>
  )
}

export default Hombre