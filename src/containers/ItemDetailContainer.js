import React , {useState, useEffect} from 'react'
import ItemDetail from './components/ItemDetail.js'

export default function ItemDetailContainer(){

    const [datita, setDatita] = useState([]);

    

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((datos) => setDatita(datos));
    },[])



    return(
        <ItemDetail datitaTitulo={data.title} />
        
    )
}
