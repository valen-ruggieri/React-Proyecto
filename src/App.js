import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartContext from "./components/context/Context";
import Cart from "./components/Cart";
import Home from "./components/pages/Home";
import Categories from "./components/pages/Categories";

function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/categoria/:categoriaId">
            <Categories />
          </Route>
          <Route path="/itemDetail/:itemId">
            <ItemDetailContainer />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartContext>
  );
}

export default App;
