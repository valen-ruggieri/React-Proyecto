import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="navBar">
        <h1 className="tituloPrinc">TIENDA DE ROPA BASIC</h1>

        <ul className="menu">
          <li>
            <Link to={"/listContainer"} style={{textDecoration : "none", color: "inherit"}}>Home</Link>
          </li>
          <li>Novedades</li>

          <li>
            <Link to={"/itemCategoria/1"} style={{textDecoration : "none", color: "inherit"}}> Remeras</Link>
          </li>
          <li>
            <Link to={"/itemCategoria/2"} style={{textDecoration : "none", color: "inherit"}}> Buzos </Link>
          </li>
          <li>
            <Link to={"/itemCategoria/3"} style={{textDecoration : "none", color: "inherit"}}> Shorts </Link>
          </li>
          <li>
            <Link to={"/itemCategoria/4"} style={{textDecoration : "none", color: "inherit"}}> Chombas </Link>
          </li>

          <li>INGRESAR</li>

          <Link to={"/cart"} style={{textDecoration : "none", color: "inherit"}}>
            {" "}
            <CartWidget />
          </Link>
        </ul>
      </nav>
    </>
  );
}
