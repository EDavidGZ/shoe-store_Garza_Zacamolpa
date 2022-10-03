import React from 'react'
import './contact.css'
import emailjs from '@emailjs/browser'


const Contact = () => {
    const sendMail = (event) => {
        event.preventDefault()

        emailjs.sendForm('service_i0h9s46', 'template_dalnjhf', event.target, 'MuDdQPwu7dTJxkzOi')
            .then(datos => console.log(datos))
            .catch(err => console.log(err))

    }
    return (
        <div className="card" >
            <h1 className='tt'>Asesoria gratuita.</h1>
            <h2 className='tt2'>Contactanos para ayudarte a impulsar tu empresa</h2>
            <form className='form' onSubmit={sendMail}>
                <label className="form-p">Nombre</label>
                <input type="text" className="form-control" placeholder="Carlos" name='name' />
                <label  className="form-p">Email address</label>
                <input type="email" className="form-control"placeholder="name@example.com" name='email' />
                <label className="form-p">Numero</label>
                <input type="text" className="form-control" placeholder="+5512544587" name='numero' />
                <label  className="form-p">Mensaje</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='message'></textarea>
                <br />
                <button  className="btn btn-success">Success</button>

            </form>
        </div>
    )
}

export default Contact