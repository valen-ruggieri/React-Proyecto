import React, { createContext, useState } from "react";
import firebase from "firebase";

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
    const countCartItems = cart.reduce((total, item) => {
      return total + item.cant;
    }, 0);

    if (countCartItems > 0) {
      return countCartItems;
    }
  }

  function totalCart() {
    const index = cart.map((element) => element.cant * element.item.precio);

    const totalCartPrice = index.reduce((a, b) => {
      return a + b;
    }, 0);

    return totalCartPrice;
  }
  const updateStock = (dataBase) => {
    cart.map(function (e) {
      let newStock = e.item.stock - e.cant;
      let idItem = e.item.idxFR;
      const item = dataBase.collection("items").doc(idItem);
      item.update({ stock: newStock });
      return console.log(newStock);
    });
  };

  function orderUser(myOrderDat, orderId) {
    const name = myOrderDat.buyer.name;
    const email = myOrderDat.buyer.email;
    const order = `<h1>Gracias por su compra ${name}!!</h1><h2>Su codigo de orden es: ${orderId}</h2> 
   <h2>En momentos recibira el comprobante en su correo ${email} </h2> `;

    return order;
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
          totalCart,
          updateStock,
          orderUser,
        }}
      >
        {children}
      </cartContext.Provider>
    </>
  );
}
