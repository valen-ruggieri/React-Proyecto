import React from "react";
import Item from "./Item";
import "./itemListContainer.css";

export default function ItemList({ items, promise}) {
  return (
    <>
      {items && (
        <>
          {items.map((item, key) => {
            return <Item item={item} key={key} promise={promise} />;
          })}
        </>
      )}
    </>
  );
}
