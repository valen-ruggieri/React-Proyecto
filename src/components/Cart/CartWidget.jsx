import React, { useContext } from "react";
import logo from "../../img/compras.png";
import { cartContext } from "../context/Context.jsx";
import { Link } from "react-router-dom";
import "./cart.css";

export default function CartWidget() {
  const { countCartItems } = useContext(cartContext);

  return (
    <>
      <Link to={"/cart"} style={{ textDecoration: "none", color: "inherit" }}>
        <img src={logo} alt="logo" className="cartWidget"/>
      </Link>
      {countCartItems() && <a className="iconCart">{countCartItems()}</a>}
    </>
  );
}
