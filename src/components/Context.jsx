import React, { createContext, useState } from "react";

export const cartContext = createContext();

export default function Context({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product, cant) {
    if (isInCart(product.id)) {
      const index = cart.findIndex((element) => element.item.id === product.id);
      cart[index].cant = cart[index].cant + cant;
      setCart([...cart]);
    } else {
      setCart([...cart, { item: product, cant }]);
    }
  }

  function isInCart(id) {
    return cart.some((element) => element.item.id === id);
  }

  function deleteItemCart(id){

    const cartFilter = cart.filter(element => element.item.id !== id)

    setCart(cartFilter);


  }

  function clearCart (){
    setCart([])
  }

  console.log(cart);
  return (
    <>
      <cartContext.Provider value={{ cart, addToCart, isInCart, deleteItemCart, clearCart}}>
        {children}
      </cartContext.Provider>
    </>
  );
}
