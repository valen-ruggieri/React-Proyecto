import React from "react";
import ContStock from "./ContStock";
import { Link } from "react-router-dom";



export default function Item({item}) 

{

    function onAdd (){
        alert (item.nombre+" añadida al carrito "+ "quedan en stock "+item.stock);
    }

  return(
  <>

   
    <article className='itemList'> 
   
    

    <img width={"260px"} height={"260px"} className="imgItem" src={item.img}/> 
     
    <h3><Link to={`itemDetail/${item.id}`}>{item.nombre}</Link></h3>
    
    <h4>Precio: $ {item.precio} </h4>
    <h4>Stock: {item.stock}u</h4>
    <button onClick={()=>onAdd()}>Agregar Al Carro</button>

    <ContStock tope = {item.stock}/>
    </article>
  

  </>


  )
  

}
