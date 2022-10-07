import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext'
import './item.css'

const Compra = () => {
    const value = useContext(CartContext)
    const [total] = value.total;
    const actualizarTodo = value.actualizarTodo;





    return (
        <div className="card" style={{ width: '80%', margin: '0 auto', marginTop: '3rem', paddingLeft: '2rem' }}>
            <h4 style={{  margin: '1rem' }} >Por favor ingresar sus datos.</h4>
            <section className="mb-3 row">
                <label className="col-sm-2 col-form-label">Nombre</label>
                <section className="col-sm-10">
                    <input type="text" className="form-control" required />
                </section>
            </section>
            <section className="mb-3 row">
                <label  className="col-sm-2 col-form-label">Email</label>
                <section className="col-sm-10">
                    <input type="text" className="form-control" required/>
                </section>
            </section>
            <section className="mb-3 row">
                <label className="col-sm-2 col-form-label">Tarjeta</label>
                <section className="col-sm-10">
                    <input type="text" className="form-control" style={{ width: "80%" }} required /><br />
                </section>
            </section>
            <section className="mb-3 row">

                <label className="col-sm-2 col-form-label">cvv</label>
                <section className="col-sm-10">
                    <input type="text" className="form-control" style={{ width: "30%" }} required />
                </section>
            </section>
            <h3>Total a pagar <span className="badge bg-secondary">${total}</span></h3>
            <button type="button" className="btn btn-outline-success" onClick={() => actualizarTodo()} style={{ width: '90%', margin: '1rem' }}>Confirmar compra</button>

            <br />
            <Link to="/producto" className="btn btn-outline-dark" style={{ width: "50%", margin: '1rem' }}>Regresar a la tienda</Link>


        </div>
    )
}
export default Compra