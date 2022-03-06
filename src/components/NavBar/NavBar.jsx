import React from "react";
import CartWidget from "../Cart/CartWidget";
import { Link } from "react-router-dom";
import "./navBar.css";

export default function NavBar() {
  return (
    <>
      <nav className="navBar">
        <h1 className="tituloPrinc">TIENDA DE ROPA BASIC</h1>

        <ul className="menu">
          <li>
            <Link
              to={"/"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Home
            </Link>
          </li>
          <li>Novedades</li>

          <li>
            <Link
              to={"/categoria/1"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              Remeras
            </Link>
          </li>
          <li>
            <Link
              to={"/categoria/2"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              Buzos{" "}
            </Link>
          </li>
          <li>
            <Link
              to={"/categoria/3"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              Shorts{" "}
            </Link>
          </li>
          <li>
            <Link
              to={"/categoria/4"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              Chombas{" "}
            </Link>
          </li>

          <li>INGRESAR</li>
          <li>
            <CartWidget />
          </li>
        </ul>
      </nav>
    </>
  );
}
