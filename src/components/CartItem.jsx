import React, { useContext } from 'react';
import { cartContext } from './Context';

export default function CartItem({element,key}) {

    const {deleteItemCart} = useContext(cartContext)


  return (
      <>
      <div id={key} className='itemCart'>
       <img src={element.item.img} width={250} height={250} className='imgCart' alt={element.item.name}/>
       <h1>{element.item.nombre}</h1>
       <h2>Cantidad: {element.cant}u</h2>
       <h2>Precio por unidad: {element.item.precio}</h2>
       <h3>Subtotal: {element.cant * element.item.precio}</h3>
       <h4>cod: {element.item.id}</h4>
       <button onClick={()=> deleteItemCart(element.item.id)}>Eliminar</button>
       </div>
      </>
  );
}
