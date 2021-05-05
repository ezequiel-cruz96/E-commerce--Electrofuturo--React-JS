import React , {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './ItemDetail.css';
import ItemCount from '../components/ItemCount';
import { Link} from 'react-router-dom';


function ItemDetail({carrito}){
    
    const [detalle, setDetalle] = useState([]);
    const{id}= useParams();
    

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/ezequiel-cruz96/Api-Rest--Base-de-datos--Hamburguesas/datos/${id}`)
        .then((response) => response.json())
        .then((data) => setDetalle(data));   
        },[])

    

    return(
        <div>

            <div className="card" >
                <img className="imagen" src={detalle.Img} alt="Hamburguesas"/>
                    <div className="card-body">
                        <div className="card-text">
                            <p>Producto: {detalle.Producto}</p>
                            <p>Descripcion: {detalle.Descripcion}</p>
                            <p>Precio: {detalle.Precio}</p>
                        </div>
                        <ItemCount stock={5} inicial={1} />

                            <div>
                            { 
                                carrito>0 ? (
                                    <Link to= '/catalog'>
                                        <button className="item__titulo--añadirCarrito"> Terminar mi compra</button>
                                    </Link>
                                    
                                )
                                : ("") 
                            }

                            </div> 
                    </div>
        </div>
       </div>
    )
}

export default ItemDetail;