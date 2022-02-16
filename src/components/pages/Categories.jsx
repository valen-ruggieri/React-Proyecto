import { useParams } from "react-router-dom";
import ItemListContainer from "../ItemListContainer";

export default function Categories() {
  const { categoriaId } = useParams();

  function categoryName() {
    let categoryName;

    switch (categoriaId) {
      case "1":
        categoryName = "Remeras";
        break;

      case "2":
        categoryName = "Buzos";
        break;

      case "3":
        categoryName = "Short de baño";
        break;

      case "4":
        categoryName = "Chombas de pique";
        break;

      default:
        alert("Categoria no existente");

        break;
    }
    return categoryName;
  }

  return (
    <>
      <body className="bodyCategorias">
      <div>
        <h2>{categoryName()}</h2>
        <ItemListContainer categoriaId={categoriaId} />
        </div>
      </body>
    </>
  );
}
