import React from 'react';
import ItemCount from './ItemCount';

function ItemListContainer(props){
    return(
        <div>
            <h1>Bienvenido a electro futuro</h1>
            {console.log(props)}
            <ItemCount stock={5} inicial={1} item="Camisa Tiger" />
            <ItemCount stock={10} inicial={3} item="Camisa Code" />  
        </div>  
    )
}
export default ItemListContainer;