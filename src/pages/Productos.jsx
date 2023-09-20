//import React from 'react'

import { useDispatch, useSelector } from "react-redux"
import Spinner from "../components/Spinner/Spinner"
import { useEffect } from "react"
import { getProductosResolver } from "../resolvers/productos.resolver"

const Productos = () => {

    const {loading,productos,error} = useSelector((store) => store.productos)
    const dispatch = useDispatch()

    useEffect(() => {
      
        dispatch(getProductosResolver())
      return () => {
        
      }
    }, [])

    if(loading) {

        return (
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Spinner/>
            </div>
        )
    }

    if(!loading && error) {
        return <h1>Algo salio mal </h1>
    }

    

  return (
    <div>
        {productos.map(({modelo,id}) => (
            <h1 key={id}>{modelo}</h1>
        ))}
    </div>
  )
}

export default Productos