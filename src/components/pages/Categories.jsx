import { useParams } from "react-router-dom";
import ItemListContainer from "../itemListContainer/ItemListContainer";
import "./pages.css";

export default function Categories() {
  const { categoriaId } = useParams();

  function categoryName() {
    let categoryName;

    switch (categoriaId) {
      case "1":
        categoryName = "REMERAS";
        break;

      case "2":
        categoryName = "BUZOS";
        break;

      case "3":
        categoryName = "SHORTS DE BAÑO";
        break;

      case "4":
        categoryName = "CHOMBAS DE PIQUE";
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
        <ItemListContainer
          categoriaId={categoriaId}
          categoryName={categoryName()}
        />
      </body>
    </>
  );
}
