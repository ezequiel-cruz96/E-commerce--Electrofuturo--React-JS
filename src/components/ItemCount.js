import React, {useState} from 'react';
import ItemDetail from './ItemDetail';
import './NavBar.css';
import { Link} from 'react-router-dom';



export default function ItemCount ({stock,inicial,item,Onadd}){ 



    let [count, setCount] = useState(inicial);

    Onadd=count;
    
    function onAdd() {
        if (count > stock)
        return; 
        setCount(count + 1);
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
                    
                { 
                count>stock? (
                    
                    <div className="stock"> No hay más stock </div>
                    
                )
                : (<div>{count}</div>) 
            }
                </div>
                <div>
                    <button onClick= {onAdd} className="sumar" >+</button>
                </div>
            </div>

            <div>
                    
                { 
                (Onadd>0)&&(Onadd<=stock)? (
                    
                    (<Link to= '/catalog'>
                    <button className="item__titulo--añadirCarrito"> Terminar mi compra</button>
                </Link>) 
                    
                )
                : ("") 
            }
                </div>
    
        </div>
    )
 
      
   }
 