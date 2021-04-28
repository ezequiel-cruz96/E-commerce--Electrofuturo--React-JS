import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import './components/NavBar.css';



class App extends React.Component{

  render(){
  
    return(
  
      <div>
        <NavBar/>
        <ItemListContainer greeting="Bienvenido a Electro futuro"/>
        
        
      </div>
    )
  }
  }
  
  export default App;
  