import React, {useState} from 'react'
import './header.css'

const ItemCount = () => {

    const [contador, setContador] = useState(0)

    const handler = (e) => {
        const operation = e.target.name;

        e.preventDefault();
        if(operation == 'resta' && contador > 0 ) {
            setContador(contador - 1)
        } 
        if(operation == 'suma' ){
            setContador(contador + 1)
        } 
    }
   

  return (
    <div >
        <div className='valores' >
                <button onClick={handler} name='resta' className='btn btn-outline-danger'>-</button>
                  <p className='letter'> {contador}</p>  
                <button onClick={handler} name='suma' className='btn btn-outline-danger'>+</button><br />
        </div>
            <button className='btn btn-outline-primary'>Agregar al carrito
            </button>
    </div>
  )
}

export default ItemCount