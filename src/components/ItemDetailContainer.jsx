import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase/firebase";
import Loader from "./Loader";

export default function ItemDetailContainer() {
  const { itemId } = useParams();

  const [itemDetail, setItemDetail] = useState([]);
  const [error, setError] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const dataBase = getFirestore();
    const itemCollection = dataBase
      .collection("items")
      .where("id", "==", itemId);

    itemCollection
      .get()
      .then((collection) => {
        if (collection === 0) {
          return Promise.reject("no hay documentos en esta coleccion");
        }

        setItemDetail(collection.docs.map((doc) => doc.data()));
        setLoaded(true);
      })
      .catch((err) => {
        setError(error);
      });
  }, [itemId]);

  return (
    <>
      {error ? (
        <>
          <h1>{error}</h1>
        </>
      ) : (
        <>
          {loaded ? (
            <>
              {itemDetail.map((item, key) => {
                return <ItemDetail item={item} key={key} />;
              })}
            </>
          ) : (
            <>
              <Loader />
            </>
          )}
        </>
      )}
    </>
  );
}
