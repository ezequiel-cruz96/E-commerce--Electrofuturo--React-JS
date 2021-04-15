import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';


function NavBar(props){
    return(
        <div>
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
        </div>
    ) 
}
export default NavBar;