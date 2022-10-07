import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './item.css'

const Cart = () => {
    const value = useContext(CartContext)
    const [carrito] = value.carrito;
    const [total] = value.total;
    const remove = value.remove;
    const confirmarRemove = value.confirmarRemove;




    return (
        <div className='show1 ' >
            <br /><br />
            <div className="carrito__center">


                {
                    carrito.length === 0 ?
                        <div style={{ display: 'grid', gridRow: 'auto', alignItems: 'center' }}>
                            <h2 style={{
                                textAlign: 'center', fontSize: "3rem"
                            }}> Carrito vacio </h2>
                            <Link to="/producto" className="btn btn-outline-dark" style={{ width: "50%", margin: '0 auto', marginTop: '2rem' }}>Regresar a la tienda</Link>

                        </div> :
                        <>



                            {

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
                                        <div className="remove__item" onClick={() => confirmarRemove(producto.id)}>
                                            <box-icon name='trash' type='solid'></box-icon>
                                        </div>
                                    </div>
                                ))
                            }
                            <button className="btn btn-outline-dark delete-we" onClick={() => remove()}>Limpiar Carrito  </button>

                            <div className="carrito__footer">
                                <h3>Total: ${total}</h3>
                                <Link to="/compra" className="btn">Terminar compra</Link>
                            </div>

                        </>

                }

            </div>


        </div>

    )

}

export default Cart