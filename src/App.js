import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import CartContext from "./components/context/Context";
import Cart from "./components/Cart/Cart";
import Home from "./components/pages/Home";
import Categories from "./components/pages/Categories";
import Form from "./components/Form/Form";

function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
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
          <Route path="/formData">
            <Form/>
          </Route>
        </Switch>
      </BrowserRouter>
    </CartContext>
  );
}

export default App;
