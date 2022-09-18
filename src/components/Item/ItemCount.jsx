import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'


const ItemCount = ({id, cantidad}) => {
    const [valor, setValor] = useState(1)
    const [car, setCar] = useState(false)
    const value = useContext(CartContext)
   const addCarrito = value.addCarrito

    const agregarCarrito = (id, valor) => {
        const productosCarrito = {id: id, valor: valor}
        console.log(productosCarrito)

        if(productosCarrito){
            setCar(true)
            console.log(car)
        }
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
        <>
            <p className="card-text ct2 " >Stock: {cantidad} </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', width: '40%', fontSize: '1rem', paddingTop: '-30rem'}}>
                <p className="card-text light" onClick={e => cantidadPoducto('+')}>+ </p>
                <p className="card-text"> {valor} </p>
                <p className="card-text light" onClick={e => cantidadPoducto('-')}>- </p>
            </div>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            {car ?
            <span>El producto ya fue agregado</span>:
            <>
            <button className="btn btn-dark cmp1" onClick={() => addCarrito(id, valor)}>Agregar al carrito</button>
            <Link to='/carrito' className="btn btn-outline-success cmp1" >Terminar mi compra</Link>
            </>
            
            }
        </>
    )
}

export default ItemCount