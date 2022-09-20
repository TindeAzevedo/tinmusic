import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>
      <NavLink className={({isActive})=> (isActive ?'activado'
      : null)} to='/'>Pop Rock</NavLink>
      <NavLink className={({isActive})=> (isActive ?'activado'
      : null)} to='/pagina2'>Folklore</NavLink>
      <NavLink className={({isActive})=> (isActive ?'activado'
      : null)} to='/pagina3'>Contacto</NavLink>
    </div>
  )
}

export default Nav
