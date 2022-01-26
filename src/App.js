
import './App.css';
import ItemList from './components/ItemList';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Swich, Route, Switch } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
   <BrowserRouter>

   <NavBar />

   <Switch>

    <Route path="/listContainer">
      <ItemListContainer />
    </Route>
    <Route path="/itemDetail/:itemId">
      <ItemDetailContainer/>
    </Route>
  
   </Switch>
  
   </BrowserRouter>
  
  );
}

export default App;
