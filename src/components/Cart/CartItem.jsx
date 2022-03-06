import React, { useContext } from 'react';
import { cartContext } from "../context/Context"
import "./cart.css";

export default function CartItem({element}) {

    const {deleteItemCart} = useContext(cartContext)


  return (
      <>
      <div  className='itemCart'>
       <img src={element.item.img} width={200} height={150} className='imgCart' alt={element.item.name}/>
       <h4>{element.item.nombre}</h4>
       <h4>Cantidad: {element.cant}u</h4>
       <h4>Precio por unidad: ${element.item.precio}</h4>
       <h4>Subtotal: {element.cant * element.item.precio}</h4>
       <h4>cod: {element.item.id}</h4>
       <button onClick={()=> deleteItemCart(element.item.id)}>Eliminar</button>
       </div>
      </>
  );
}
