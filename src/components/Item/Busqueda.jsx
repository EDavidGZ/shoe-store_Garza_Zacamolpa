import React, {useContext} from 'react'
import './item.css'
import { CartContext } from '../../context/CartContext'
import BusquedaDetail from './BusquedaDetail'


const Busqueda = () => {
    const value = useContext(CartContext)
    const [usuarios] = value.usuarios
  return (
    <>
      <div className='cont'>
        {
          usuarios.map((producto) => (
            <BusquedaDetail
              key={producto.id}
              id={producto.id}
              title={producto.title}
              price={producto.price}
              image={producto.image}
              category={producto.category}
              cantidad={producto.cantidad}
            />
          ))

        }
      </div>
    </>
  )
}

export default Busqueda