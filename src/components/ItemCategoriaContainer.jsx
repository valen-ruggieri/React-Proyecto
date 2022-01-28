import React, { useEffect, useState } from "react";
import ItemCategoria from "./ItemCategoria";
import { useParams } from "react-router-dom";
import productosJson from "../productos.json";

export default function ItemCategoriaContainer() {
  const { categoriaId } = useParams();

  const [categoriaLista, setCategoriaLista] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      let productos = productosJson;
      productos = productos.filter((item) => item.catg === categoriaId);

      setCategoriaLista(productos);
    }, 2000);
  }, [categoriaId]);

  return (
    <>
      {categoriaLista ? (
        <section className="itemListCategoria">
          {categoriaLista.map((categoriaLista, key) => {
            return <ItemCategoria categoriaLista={categoriaLista} key={key} />;
          })}
        </section>
      ) : (
        <>
          <section className="itemDetailContainer">
            <h2>Loading....</h2>
            {console.log("grrggfdg")}
          </section>
        </>
      )}
    </>
  );
}
