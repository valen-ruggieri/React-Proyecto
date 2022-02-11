import React from "react";
import Item from "./Item";

export default function ItemList({ items }) {
  return (
    <>
      {items && (
        <>
          {items.map((item, key) => {
            return <Item item={item} key={key} />;
          })}
        </>
      )}
    </>
  );
}
