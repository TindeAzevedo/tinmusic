import React from 'react'
import { FaInstagram,FaFacebook,FaYoutube,FaSpotify } from "react-icons/fa";

function Contacto() {
  return (
    <div className='todo'>
        <h1><i>CONTACTO</i></h1>
        <div className='iconos'>
        <a href="https://www.facebook.com/tinmelena/"
        className='ico' target='_blank'>
          <FaFacebook/><h4>Facebook</h4></a>
        <a href="https://www.instagram.com/tindeazevedo/"
        className='ico' target='_blank'>
          <FaInstagram/><h4>Instagram</h4></a>
        <a href="https://www.youtube.com/tinfolclore"
        className='ico' target='_blank'>
          <FaYoutube/><h4>Youtube</h4></a>
        <a href="https://www.youtube.com/tinfolclore"
        className='ico' target='_blank'>
          <FaSpotify/><h4>Spotify</h4></a>
        </div>
    </div>
  )
}

export default Contacto
