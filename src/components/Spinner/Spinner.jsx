//import React from 'react'
import { PacmanLoader } from "react-spinners"


const override= {
    display: "flex",
    margin: "0 auto",
    borderColor: "red",
  };

const Spinner = () => {
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
        <PacmanLoader
        color={"#d6cb36"}
        //loading={loading}
        cssOverride={override}
        size={70}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Spinner