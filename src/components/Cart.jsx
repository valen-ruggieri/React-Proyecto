import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { cartContext } from "./Context";

export default function Cart() {
  const { cart, clearCart, countCartItems } = useContext(cartContext);



  return (
    <>
      {cart[0] ? (
        <>
        <section className="carritoContainer">
        <h1>Tienes {countCartItems()} items en el carrito</h1>
        <button onClick={() => clearCart()}>Vaciar Carrito</button>
        </section>
        <section className="carrito">
        {cart.map((element, key) => {
          return <CartItem key={key} element={element} />;
        })}
      </section>
      <section className="footerCart">
        <button onClick={() => clearCart()} sty >
          <Link to={"/listContainer"} onClick={()=>alert("Compra finalizada con exito")} style={{textDecoration : "none", color: "inherit"}}>
            Finalizar Compra
            </Link>
            </button>
      </section>

        
        </>
      ) : (
        <>
          <div className="main">
            <h1>Su carrito esta vacio..</h1>
            <button>
              <Link to={"/listContainer"}> ir a comprar</Link>
            </button>
          </div>
        </>
      )}

    
    </>
  );
}
