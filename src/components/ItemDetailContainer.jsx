import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase/firebase";
import Loader from "./Loader";

export default function ItemDetailContainer() {
  const { itemId } = useParams();

  const [itemDetail, setItemDetail] = useState([]);
  const [promise, setPromise] = useState(false);

  useEffect(() => {
    const dataBase = getFirestore();
    const itemCollection = dataBase
      .collection("items")
      .where("id", "==", itemId);

    itemCollection
      .get()
      .then((collection) => {
        if (collection === 0) {
          console.log("no hay documentos en esta coleccion");
          return;
        }

        console.log("Hay documentos");

        setItemDetail(collection.docs.map((doc) => doc.data()));
        setPromise(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [itemId]);

  return (
    <>
      {promise && (
        <>
          {itemDetail.map((item, key) => {
            return <ItemDetail item={item} key={key} />;
          })}
        </>
      )}
      {!promise && (
        <>
          <Loader />
        </>
      )}
    </>
  );
}
