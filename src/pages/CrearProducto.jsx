// import React from 'react'

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { postProductosResolver } from "../resolvers/productos.resolver"

const Page = () => {

  const dispatch = useDispatch()
  const {loading} =  useSelector((store) => store.productos)

  const [state,setState] = useState({
      marca:"",
      modelo:"",
      memoria:"",
      precio:""
  })

  const handleChange = (e) => {
    const {name,value} = e.target
    setState({
      ...state,
      [name]:value
    })
  }

  const handleSubmt = (e) => {
    e.preventDefault()
    dispatch(postProductosResolver(state))
  }

  return (
    <form onSubmit={handleSubmt}>
      <input onChange={handleChange} name="marca" type="text" />
      <input onChange={handleChange} name="modelo" type="text" />
      <input onChange={handleChange} name="memoria" type="number" />
      <input onChange={handleChange} name="precio" type="number" />
      <button disabled={loading} type="submit">Crear</button>
    </form>
  )
}

export default Page