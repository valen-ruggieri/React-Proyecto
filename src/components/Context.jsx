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

  function deleteItemCart(id) {
    const cartFilter = cart.filter((element) => element.item.id !== id);

    setCart(cartFilter);
  }

  function clearCart() {
    setCart([]);
  }

  function countCartItems() {
    const count = cart.map((element) => element.cant);

    if (count.length > 0) {
      const suma = count.reduce((a, b) => {
        return a + b;
      });

      return suma;
    }
  }

  return (
    <>
      <cartContext.Provider
        value={{
          cart,
          addToCart,
          isInCart,
          deleteItemCart,
          clearCart,
          countCartItems,
        }}
      >
        {children}
      </cartContext.Provider>
    </>
  );
}
