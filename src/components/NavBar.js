import React from 'react';
import './NavBar.css';
import './logo.png';


function NavBar(props){
    
    return(
        <div >
            <div className="logo">Electro futuro E-Commerce</div>
            <div>
                <div className="barraNavegacion">
                    <div><a href="" className="barraNavegacion__item">Inicio</a></div>
                    <div><a href="" className="barraNavegacion__item">Componentes</a></div>
                    <div><a href="" className="barraNavegacion__item">Comprar</a></div>
                    <div><a href="" className="barraNavegacion__item">Ayuda</a></div>
                </div>
            </div>
            

        </div>
    ) 
}
export default NavBar;