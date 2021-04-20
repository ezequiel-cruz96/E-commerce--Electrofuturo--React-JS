import React, {useState} from 'react';
import './NavBar.css';



export default function ItemCount ({stock,inicial,item}){ 

    let [count, setCount] = useState(inicial);
    
    function onAdd() {
        if (count >= stock)
        return; 
        setCount(count + 1) 
       }
       
       function offAdd() {
        if (count <= inicial)
        return; 
        setCount(count - 1) 
       }

    return(
        <div>

            <div className="item__titulo">{item}</div>
            <div className="item__estructura">
            
                <div>
                    <button onClick= {offAdd} className="restar">-</button>
                </div>
                <div>
                    {count}</div>
                <div>
                    <button onClick= {onAdd} className="sumar" >+</button>
                </div>
            </div>

            <div className="item__titulo--añadirCarrito"> Agregar a carrito </div>

        </div>
    )
   }