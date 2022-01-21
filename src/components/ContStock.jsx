
import React, { useState } from "react";



export default function ContStock(tope) {


    const [cantidad , setCantidad] = useState(0);

    function sumar (){

        if ( cantidad < tope) setCantidad(cantidad + 1);

    
    }

    
    function restar (){

        if ( cantidad < tope) setCantidad(cantidad - 1);
    }

    




  return (

    <>
    <br/>
    <br/>
    <button onClick={()=> restar()}>-</button>
    {cantidad}
    <button onClick={()=> sumar()}>+</button>
    <br/>
    <br/>
    <hr/>
    
    </>



  )
}
