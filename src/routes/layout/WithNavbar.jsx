// import React from 'react'
import { Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"

const WithNavbar = () => {
  return (
    <>
        <Navbar/>
        {/* es el mismo children pero para las rutas  */}
        <Outlet/>
        <h1>Footer</h1>
    </>
  )
}

export default WithNavbar