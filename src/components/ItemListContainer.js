import React , {useState, useEffect} from 'react'
import ItemCount from './ItemCount';
import List from '../components/ItemList'
import ItemDetailContainer from '../containers/ItemDetailContainer';

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
            <ItemDetailContainer/>
            <ItemCount stock={5} inicial={1} item="Camisa Tiger" />
            <ItemCount stock={10} inicial={3} item="Camisa Code" /> 
            <List postsInput={posts}/> 
        </div>  
    )
}
export default ItemListContainer;