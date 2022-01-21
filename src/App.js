
import './App.css';
import ItemList from './components/ItemList';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Swich, Route, Switch } from 'react-router-dom';


function App() {
  return (
   <BrowserRouter>

   <NavBar />

   <Switch>

     <Route exact path="/itemList">
      <ItemList/>
     </Route>
    <Route path="/listContainer">
      <ItemListContainer />
    </Route>
  
   </Switch>
  
   </BrowserRouter>
  
  );
}

export default App;
