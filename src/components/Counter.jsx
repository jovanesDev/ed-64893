// import React from 'react'

import { useSelector,useDispatch } from "react-redux"
import { incrementar,decrementar, reset, setDefaultValue } from "../feature/counterSlice"

const Counter = () => {

   const { count } = useSelector((store) => store.counter )
   const dispatch = useDispatch()
   // generar el state 
   // lograr para que el valor tome del input y del state 

  return (
    <div>
        <hr />
       <h1> Hola desde Counter</h1>
       <div>
        <button onClick={()=> dispatch(incrementar())}>Sumar</button>
        <h2>Counter : {count} </h2>
        <button onClick={()=> dispatch(decrementar())}>Restar</button>
        <div>
        <button onClick={()=> dispatch(reset())}>Reset</button>
        </div>
        <div>
        <button onClick={()=> dispatch(setDefaultValue(10))}>Setear 10</button>
        </div>
       </div>
       <hr />
    </div>
  )
}

export default Counter