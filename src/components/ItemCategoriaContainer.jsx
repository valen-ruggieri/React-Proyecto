import React, { useEffect, useState } from "react";
import ItemCategoria from "./ItemCategoria";
import { useParams } from "react-router-dom";
import productosJson from "../productos.json";
import Loader from "./Loader";

export default function ItemCategoriaContainer() {
  const { categoriaId } = useParams();
  const [promise , setPromise] = useState(false);

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
      {categoriaLista[0] ? (
        <section className="itemListCategoria">
          {categoriaLista.map((categoriaLista, key) => {
            return <ItemCategoria categoriaLista={categoriaLista} key={key} />;
          })}
        </section>
      ) : (
        <>
          <Loader/>
        </>
      )}
    </>
  );
}
