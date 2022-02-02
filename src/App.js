import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemCategoriaContainer from "./components/ItemCategoriaContainer";
import CartContext from "./components/Context";
import Cart from "./components/Cart";

function App() {
  return (
    <CartContext>
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
        <Route path="/cart">
          <Cart/>
        </Route>
      </Switch>
    </BrowserRouter>
    </CartContext>
  );
}

export default App;
