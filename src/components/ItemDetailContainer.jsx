import React, {  useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import productosJson from "../productos.json";


export default function ItemDetailContainer() {

  

  const { itemId } = useParams();

  const [producto, setProducto] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      let arrayDeProductos = productosJson;

      arrayDeProductos = arrayDeProductos.filter((item) => item.id === itemId);

      setProducto(arrayDeProductos[0]);
    }, 2000);
  }, [itemId]);

  return (
    <>
      <ItemDetail producto={producto} />
    </>
  );
}
