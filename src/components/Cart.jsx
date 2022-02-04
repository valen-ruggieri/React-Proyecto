import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { cartContext } from "./Context";
import Loader from "./Loader";

export default function Cart() {
  const { cart, clearCart, countCartItems, totalCart } = useContext(cartContext);

  const [promise, setPromise] = useState(false);
  const [total, setTotal]= useState(0);
  const [cantidadItems, setCantidadItems] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setPromise(true);
      
    }, 2000);
  });

  useEffect(()=>{
    
    setTotal(totalCart());
      setCantidadItems(countCartItems());
  })

  return (
    <>
      {promise ? (
        <>
          {cart[0] ? (
            <>
              <section className="carritoContainer">
                <h1>Tienes {cantidadItems} items en el carrito</h1>
                <h2>El total es: {total}</h2>
                <button onClick={() => clearCart()}>Vaciar Carrito</button>
              </section>
              <section className="carrito">
                {cart.map((element, key) => {
                  return <CartItem key={key} element={element} />;
                })}
              </section>
              <section className="footerCart">
                <button onClick={() => clearCart()}>
                  <Link
                    to={"/listContainer"}
                    onClick={() => alert("Compra finalizada con exito")}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Finalizar Compra
                  </Link>
                </button>
              </section>
            </>
          ) : (
            <>
              <br />
              <section className="carritoContainer">
                <h1>Su carrito esta vacio..</h1>
                <button>
                  <Link to={"/listContainer"}> ir a comprar</Link>
                </button>
              </section>
            </>
          )}
        </>
      ) : (
        <>
          <Loader />
        </>
      )}
    </>
  );
}
