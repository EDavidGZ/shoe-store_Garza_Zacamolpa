import React, { useContext } from 'react'
import './item.css'
import ItemList from './ItemLists'
import { CartContext } from '../../context/CartContext'




const ItemCount = () => {

  const value = useContext(CartContext)
  const [productos] = value.productos;




  return (
    <>
      <div className='cont'  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
        {
          productos.map((producto) => (
            <ItemList
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

export default ItemCount