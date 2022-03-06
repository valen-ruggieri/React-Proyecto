import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getFirestore } from "../../firebase/firebase";
import "./itemListContainer.css";

export default function ItemCategoriaContainer({ categoriaId, categoryName }) {
  const [items, setItems] = useState([]);
  const [promise, setPromise] = useState(false);
  const [promiseH2, setPromiseH2] = useState(false);

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

        setItems(collection.docs.map((doc) => doc.data()));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoriaId]);

  useEffect(() => {
    setTimeout(() => {
      setPromise(true);
    }, 2000);
    setTimeout(() => {
      setPromiseH2(true);
    }, 1000);
  });

  return (
    <>
      <>{promiseH2 && <h2 className="h2Category"> {categoryName} </h2>}</>
      <section className="itemListCategoria">
        <ItemList items={items} promise={promise} />
      </section>
    </>
  );
}
