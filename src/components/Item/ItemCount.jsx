import React, { useContext } from 'react'
import './item.css'
import ItemList from './ItemLists'
import { DataContext } from '../../context/Dataprovider'




const ItemCount = ({agregarCarrito, cantidadPoducto, valor}) => {

  const value = useContext(DataContext)
  const [productos] = value.productos;




  return (
    <>
      <div className='cont'>
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
              cantidadPoducto={cantidadPoducto}
              agregarCarrito={agregarCarrito}

            />
          ))

        }
      </div>
    </>
  )
}

export default ItemCount