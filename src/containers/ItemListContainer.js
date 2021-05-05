import React , {useState, useEffect} from 'react';
import ItemCount from '../components/ItemCount';
import List from '../components/ItemList';
import ItemDetail from '../components/ItemDetail.js';


function ItemListContainer(props){

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://raw.githubusercontent.com/ezequiel-cruz96/E-commerce--Electrofuturo--React-JS/master/src/listaProductos/productos.json')
                .then((response) => response.json())
                .then((data) => setPosts(data));
        }, 2000);
        
    }, [])
    return(
        <div>
            <h1>Bienvenido a electro futuro</h1>
            {console.log(props)}
            <ItemCount stock={5} inicial={0} item="Hamburguesa simple"/>
            <ItemCount stock={10} inicial={3} item="Hamburguesa doble" /> 
           
{/*             <List postsInput={posts}/> 
 */}        </div>  
    )
}
export default ItemListContainer;