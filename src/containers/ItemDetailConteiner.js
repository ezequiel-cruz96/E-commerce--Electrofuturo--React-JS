import React , {useState, useEffect} from 'react';
import ItemDetail from '../components/ItemDetail.js';



function ItemDetailContainer(){
    
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://my-json-server.typicode.com/ezequiel-cruz96/Api-Rest--Base-de-datos--Hamburguesas/datos')
                .then((response) => response.json())
                .then((data) => setDatos(data));
        },2000);
        
    }, [])

    return(
        <div>
            {
                datos.map((items)=>(
                    <ItemDetail key={items.id} />
                ))
            }

        </div>
    )
}

export default ItemDetailContainer;