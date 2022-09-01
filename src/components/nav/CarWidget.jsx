import React, { useState } from 'react'
import {BsCart4} from 'react-icons/bs'
import './nav.css'



const CarWidget = () => {
    const [contador, setContador] = useState(0)
    const compra = (e) => {
        setContador(contador + 1)
    }


  return (
    <div>
         <h3 onClick={compra}>
                <BsCart4 className='car'/>
                { contador > 0 && contador < 10 ? (
                    <p className='contador'>{contador}</p>
                    )
                    : contador > 9 ? (
                    <p className='contador'>9+</p>
                )
                 : 0 }
            </h3>
    </div>
  )
}

export default CarWidget