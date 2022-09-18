import React, { useContext } from 'react'
import { GrFormClose } from 'react-icons/gr'
import { CartContext } from '../../context/CartContext'

const Cart = () => {
    const value = useContext(CartContext)
    const [carrito, setCarrito] = value.carrito;
    const [total] = value.total;
    const removeProducto = value.removeProducto;
    const remove = value.remove;



    return (
        <div className='show1'>
            <br /><br />
            <h2>Su carrito</h2>
            <div className="carrito__center">
                <div className="remove__item" onClick={() => remove()}>
                    <box-icon name='trash' type='solid'></box-icon>
                </div>


                {
                    carrito.length == 0 ? <h2 style={{
                        textAlign: 'center', fontSize: "3rem"
                    }}> Carrito vacio </h2> :
                        <>{

                            carrito.map((producto) => (


                                <div className="carrito__item" key={producto.id}>

                                    <img src={producto.image} alt="" />
                                    <div>
                                        <h3>{producto.title}</h3>
                                        <p className="price">${producto.price}</p>
                                    </div>
                                    <div>
                                        <p className="cantidad">{producto.cantidad}</p>

                                    </div>
                                    <div className="remove__item" onClick={() => removeProducto(producto.id)}>
                                        <box-icon name='trash' type='solid'></box-icon>
                                    </div>
                                </div>
                            ))
                        }
                        </>
                }

            </div>
            <div className="carrito__footer">
                <h3>Total: ${total}</h3>
                <button className="btn">Payment</button>
            </div>
        </div>

    )

}

export default Cart