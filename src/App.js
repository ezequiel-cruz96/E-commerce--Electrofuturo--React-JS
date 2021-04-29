import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import './components/NavBar.css';
import { BrowserRouter,Route } from 'react-router-dom';
import ItemDetail from './components/ItemDetail';



class App extends React.Component{

  render(){
  
    return(
  
      <div>
        <BrowserRouter>
        <NavBar/>
        <ItemListContainer greeting="Bienvenido a Electro futuro"/>
        <Route path="/producto/:1">
          <ItemDetail  />  
          </Route>
        </BrowserRouter>
        
      </div>
    )
  }
  }
  
  export default App;
  