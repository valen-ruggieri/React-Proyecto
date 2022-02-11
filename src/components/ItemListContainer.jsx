import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getFirestore } from "../firebase/firebase";

export default function ItemCategoriaContainer({ categoriaId }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const dataBase = getFirestore();
    const itemCollection = dataBase
      .collection("items")
      .where("categoria", "==", categoriaId);

    itemCollection
      .get()
      .then((collection) => {
        if (collection === 0) {
          console.log("no hay documentos en esta coleccion");
          return;
        }

        console.log("Hay documentos");

        setItems(collection.docs.map((doc) => doc.data()));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoriaId]);

  return (
    <>
      <section className="itemListCategoria">
        <ItemList items={items} />
      </section>
    </>
  );
}
