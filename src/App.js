import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemCategoriaContainer from "./components/ItemCategoriaContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/listContainer">
          <ItemListContainer />
        </Route>
        <Route path="/itemDetail/:itemId">
          <ItemDetailContainer />
        </Route>
        <Route path="/itemCategoria/:categoriaId">
          <ItemCategoriaContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
