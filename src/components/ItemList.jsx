import React, { useEffect, useState } from "react";
import Item from "./Item";

const ItemList = () => {
  const [llegoLaPromesa, setLlegoLaPromesa] = useState(false);
  const [arrayDeProductos, setArrayDeProductos] = useState([]);

  const productosEnStock = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
				{
					nombre: "Remera",
					stock: 60,
					img: "https://i.ibb.co/Hhqtq0z/remera.jpg",
				},
				{ nombre: "Buzo", stock: 30, img: "https://i.ibb.co/p4fVpZZ/Buzo.jpg" },
				{
					nombre: "Short",
					stock: 70,
					img: "https://i.ibb.co/t28Q7SR/Short.jpg",
				},
				{
					nombre: "Chomba",
					stock: 40,
					img: "https://i.ibb.co/vBG9nV2/Chomba.jpg",
				},
			]);
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
      {console.log(llegoLaPromesa)}
      {!llegoLaPromesa ? <p>Loading...</p> : arrayDeProductos.map((item) => {
            return <Item item={item} />;
          }
      ) }
    </>
  );
}

export default ItemList;