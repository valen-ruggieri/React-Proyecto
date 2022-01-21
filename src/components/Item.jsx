import React from "react";
import ContStock from "./ContStock";



export default function Item({item}) 

{

    function onAdd (){
        alert (item.nombre+" añadida al carrito "+ "quedan en stock "+item.stock);
    }

  return(

    <>PRODUCTO:
    <p>{item.nombre}</p>

    <img width={"300px"} src={item.img}/>
    
    <p>{item.stock}</p>

    <button onClick={()=>onAdd()}>Agregar Al Carro</button>

    <ContStock tope = {item.stock}/>
   
    
    </>


  )
  

}
