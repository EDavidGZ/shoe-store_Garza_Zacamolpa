import React from 'react'
import { Link } from 'react-router-dom'
import men from './img/hombre.jpg'
import products from './img/productos.jpg'
import women from './img/mujer.jpeg'
import './inicio.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Inicio = () => {
  return (
    <div>
      <div className='title-firts' data-aos="fade-up">
      <p >Los mejores productos </p><p> al mejor precio</p>

      </div>
      <div className=" g-0 inicio" data-aos="fade-up">
        <div className='imgi1' data-aos="fade-right">
          <Link to='/producto'>
            <img src={products} className='im1' />
          </Link>
        </div>

        <div className='imgi2'>

          <div >
            <Link to="/hombre">
              <img src={men} className='im2' data-aos="fade-down-left" />
            </Link>
          </div>
          <div >
            <Link to='/mujer'>
              <img src={women} className='im2' data-aos="fade-up-left" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Inicio