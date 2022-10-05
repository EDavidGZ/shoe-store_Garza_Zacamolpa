import React, { useContext } from 'react'
import { GrFormClose } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const Menu = () => {
    const value = useContext(CartContext)
    const [menu, setMenu] = value.menu;
    const tooglefalse = () => {
        setMenu(false);
    }
    const show1 = menu ? "carritos show" : "carritos"
    const show2 = menu ? "cart show" : "cart"
    return (
        <div className={show1}>
            <div className={show2}>
                <GrFormClose className="carrito__close" onClick={tooglefalse} />
               <br />
                <div className="carrito__center">
                    <ul className='list-group'>
                        <Link to='/' className='list-group-item' onClick={tooglefalse}>Inicio</Link>
                        <Link to='/producto' className='list-group-item'onClick={tooglefalse}>Productos</Link>
                        <Link to='/hombre' className='list-group-item'onClick={tooglefalse}>Hombre</Link>
                        <Link to='/mujer' className='list-group-item'onClick={tooglefalse}>Mujer</Link>
                    </ul>
                </div>
            </div>
        </div>


    )
}

export default Menu