import React, { useContext } from "react";
import logo from "../img/compras.png";
import { cartContext } from "./Context";

export default function CartWidget() {
  const { cart, countCartItems } = useContext(cartContext);

  return (
    <>
      <li>
      <img src={logo} width={"30px"} alt="logo" />
      {cart[0]?
      <a className="iconCart">{countCartItems()}</a>
    :
    <></>}
      
      </li>
      
    </>
  );
}
