import React, { useContext } from "react";
import logo from "../img/compras.png";
import { cartContext } from "./context/Context.jsx";
import { Link } from "react-router-dom";

export default function CartWidget() {
  const { countCartItems } = useContext(cartContext);

  return (
    <>
      <Link to={"/cart"} style={{ textDecoration: "none", color: "inherit" }}>
        <img src={logo} width={"30px"} alt="logo" />
      </Link>
      {countCartItems() && <a className="iconCart">{countCartItems()}</a>}
    </>
  );
}
