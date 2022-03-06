import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../Cart/CartItem";
import "./cart.css";
import { cartContext } from "../context/Context";

export default function Cart() {
  const { cart, clearCart, countCartItems, totalCart } =
    useContext(cartContext);

  return (
    <>
      {cart[0] ? (
        <>
          <section className="carritoContainer">
            <h1>Tienes {countCartItems()} items en el carrito</h1>
            <h2>El total es: ${totalCart()}</h2>
            <button onClick={() => clearCart()}>Vaciar Carrito</button>
            <div className="carrito">
            {cart.map((element, key) => {
              return <CartItem key={key} element={element} />;
            })}
          </div>
          </section>
         
          <section className="footerCart">
            <button>
              <Link
                to={"/formData"}
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
          <section className="carritoVacioContainer">
          <div className="carritoVacio">
            <h1>Su carrito esta vacio...</h1>
            <button>
              <Link to={"/"} style={{textDecoration: "none", color: "inherit" }} > ir a comprar</Link>
            </button>
            </div>
          </section>
        </>
      )}
    </>
  );
}
