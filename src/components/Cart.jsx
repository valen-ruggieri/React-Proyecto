import React, { useContext } from "react";
import CartItem from "./CartItem";
import { cartContext } from "./Context";

export default function Cart() {
  const { cart, clearCart } = useContext(cartContext);

 
  return (
    <>
      {cart [0] ? (
        <button onClick={() => clearCart()}>Vaciar Carrito</button>
      ) : (
        <><h1 className="main">Carro Vacio</h1> </>
      )}

      <section className="carrito">
        {cart.map((element, key) => {
          return <CartItem key={key} element={element} />;
        })}
      </section>
    </>
  );
}
