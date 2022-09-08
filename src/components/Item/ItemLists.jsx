import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/Dataprovider';


const ItemList = ({
  id,
  title,
  price,
  image,
  cantidad,
}) => {
  const value = useContext(DataContext)
  const addCarrito = value.addCarrito;
  const [valor, setValor] = useState(1)
  const agregarCarrito = (id,valor) => {
    const productosCarrito = {id: id, valor: valor}
    console.log(productosCarrito)
  }

  const cantidadPoducto = (operacion) => {
    if( operacion === '+'){
      if(valor < cantidad){
        setValor(valor + 1)
      }
    } else {
      if(valor > 1){
        setValor(valor - 1)
      }
    }
  }





  return (
    <div className="card cd2 tarjeta crth" style={{ width: "20rem" }}>
      <Link to={`/producto/${id}`}>
        <div>
          <img src={image} alt={title} className="card-img-top" />
        </div>
      <div className="card-body">
        <h1 className="card-text tt1 ">{title}</h1>
        <div className='tdtp'>
          <p className="card-text tt1">${price}</p>
          <p className="card-text green">Envio gratis </p>
        </div>

        </div>   
       </Link>

      {cantidad > 0 ?
      <div>
         <p className="card-text ">Stock: {cantidad} </p>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', width: '40%', fontSize: '1.56rem'}}>
                <p className="card-text light" onClick={e =>  cantidadPoducto('+')}>+ </p>
                  <p className="card-text"> {valor} </p>
                <p className="card-text light" onClick={e =>  cantidadPoducto('-')}>- </p>
              </div>

        <div className="buttom">
          <Link to='/carrito'>
          <button className='btn btn-dark' onClick={() => agregarCarrito(id, valor)}>
            Añadir al carrito
          </button></Link>
        </div>
        </div>

        : <p className="card-text sinp">No disponible</p>

      }

    </div>


  )
}

export default ItemList