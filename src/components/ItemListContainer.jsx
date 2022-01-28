import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import productosJson from "../productos.json";

export default function ItemListContainer() {
  const [llegoLaPromesa, setLlegoLaPromesa] = useState(false);
  const [arrayDeProductos, setArrayDeProductos] = useState([]);

  const productosEnStock = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productosJson);
    }, 2000);
  });

  useEffect(() => {
    productosEnStock
      .then((res) => {
        setLlegoLaPromesa(true);
        setArrayDeProductos(res);
      })

      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <ItemList
        llegoLaPromesa={llegoLaPromesa}
        arrayDeProductos={arrayDeProductos}
      />
    </>
  );
}
