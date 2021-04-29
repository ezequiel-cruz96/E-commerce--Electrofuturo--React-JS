import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import './components/NavBar.css';
import { BrowserRouter } from 'react-router-dom';



class App extends React.Component{

  render(){
  
    return(
  
      <div>
        <BrowserRouter>
        <NavBar/>
        <ItemListContainer greeting="Bienvenido a Electro futuro"/>
        
        </BrowserRouter>
        
        
        
      </div>
    )
  }
  }
  
  export default App;
  