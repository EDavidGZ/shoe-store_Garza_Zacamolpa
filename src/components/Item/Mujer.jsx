import React, {useContext} from 'react'
import './item.css'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
const Mujer = () => {
    const value = useContext(CartContext)
    const [mujer] = value.mujer
  return (
    <>
      <div className='cont' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
        {
          mujer.map((producto) => (
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
    
            // <BusquedaDetail
            //   key={producto.id}
            //   id={producto.id}
            //   title={producto.title}
            //   price={producto.price}
            //   image={producto.image}
            //   category={producto.category}
            //   cantidad={producto.cantidad}
            // />
          ))

        }
      </div>
    </>
  )
}

export default Mujer