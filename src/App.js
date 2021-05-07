import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './containers/ItemListContainer';
import './components/NavBar.css';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import ItemDetail from './components/ItemDetail';



class App extends React.Component{

  render(){
  
    return(
  
      <div>
        <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting="Bienvenido a Electro futuro"/>
          </Route>
          <Route path="/datos/:id">
            <ItemDetail  />
          </Route>
        </Switch>
        </BrowserRouter>
      </div>
    )
  }
  }
  
  export default App;
  