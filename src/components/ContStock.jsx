
import React, { useState } from "react";



export default function ContStock({tope}) {


    const [cantidad , setCantidad] = useState(0);

    function sumar (){

        if ( cantidad < tope) setCantidad(cantidad + 1);

    
    }

    
    function restar (){

        if ( cantidad > 0) setCantidad(cantidad - 1);
    }

    

  return (

    <>
    <br/>
    <br/>
    <button className="buttonMasMenos" onClick={()=> restar()}>-</button>
    <>{cantidad}</>
    <button className="buttonMasMenos" onClick={()=> sumar()}>+</button>
    <br/>
    <br/>
    
    
    </>



  )
}
