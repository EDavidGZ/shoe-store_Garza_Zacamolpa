import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'


const Footer = () => {
  return (
    <div className='footer navbar'>
      <small className='badge rounded-pill text-bg-light'>Copyright © 2022 ED&G Inc. All rights reserved.</small>
      <ul className='icon'>
        <a href="https://www.facebook.com/profile.php?id=100008401264868"><BsFacebook className='icons' /></a>
        <a href="https://www.instagram.com/daviid_1308/"><AiFillInstagram className='icons' /></a>
        <a href="https://api.whatsapp.com/send?phone=2462136643"><BsWhatsapp className='icons' /></a>

      </ul>
    </div>
  )
}

export default Footer