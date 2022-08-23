import React, {useState} from 'react'
import './header.css'

const ItemCount = () => {

    const [contador, setContador] = useState(0)

    const quitar = (e) => {
        e.preventDefault();
        if(contador > 0){
            setContador(contador - 1)
        } else {
            setContador(contador)
            console.log(contador)
        }
    }
    const compra = (e) => {
        e.preventDefault();
        setContador(contador + 1)
        console.log(contador)
    }
    

  return (
    <div className='cont'>
        <form className='tarjeta'>
            <span>Shirt tiger</span><br />
            <div className='valores'>
                <button onClick={quitar} className='l'>-</button>
                  <p className='letter'> {contador}</p>  
                <button onClick={compra} className='l'>+</button><br />

            </div>
            <button className='btn btn-outline-primary'>Agregar al carrito
            </button>
        </form>
    </div>
  )
}

export default ItemCount