import React , {useState, useEffect} from 'react'
import ItemDetail from '../components/ItemDetail.js'
import {useParams} from 'react-router-dom';

export default function ItemDetailContainer() {

  let {id} = useParams();
  const [data, setData] = useState({id:"", title:""});

  useEffect(() => {
      obtenerProducto(id)
          .then(res => setData(res))
  },[id])
  
  return(
      <div>
          
        <ItemDetail idApi={data.id} titleApi={data.title} />  
      </div>
  )
}