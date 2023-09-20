import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <ul style={{width:"100%",display:"flex",justifyContent:"space-around",background:"black",padding:"20px 0px"}}>
        <li>
            <NavLink to="/" style={{color:"white"}} >Home</NavLink>
        </li>
        <li >
            <NavLink to="/productos" style={{color:"white"}} >Productos</NavLink>
        </li>
        <li >
            <NavLink to="/page" style={{color:"white"}} >Crear</NavLink>
        </li>
    </ul>
  )
}

export default Navbar