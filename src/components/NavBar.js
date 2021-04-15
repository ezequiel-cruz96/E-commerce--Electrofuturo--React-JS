import React from 'react';
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer.js';
import './NavBar.css';


function NavBar(props){
    return(
        <div >
            <div className="barraNavegacion__logo">
            Electro futuro
            </div>
            <div>
                <div className="barraNavegacion__items">
                    <div><a href="App.js" className="barraNavegacion__item">Inicio</a></div>
                    <div><a href="App.js" className="barraNavegacion__item">Componentes</a></div>
                    <div><a href="App.js" className="barraNavegacion__item">Comprar</a></div>
                    <div><a href="App.js" className="barraNavegacion__item">Ayuda</a></div>
                    <div><CartWidget/></div>
                </div>
            </div>
            <ItemListContainer greeting="Bienvenido a Electro futuro"/>
        </div>
    ) 
}
export default NavBar;