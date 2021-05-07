import React , {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './ItemDetail.css';
import ItemCount from '../components/ItemCount';
import { Link} from 'react-router-dom';


function ItemDetail(){
    
    const [detalle, setDetalle] = useState([]);
    const{id}= useParams();

    let Onadd=0;
    console.log(Onadd);
    
    
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/ezequiel-cruz96/Api-Rest--Base-de-datos--Hamburguesas/Hamburguesas/${id}`)
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

                     {/*    Se podria mejorar el contador al agregarle un stock a la base de datos y lograr
                        un stock unico por cada item */}
                        <ItemCount  item={detalle.Producto} stock={8} inicial={0} Onadd={Onadd}/>
                    </div>
        </div>
       </div>
    )
}

export default ItemDetail;