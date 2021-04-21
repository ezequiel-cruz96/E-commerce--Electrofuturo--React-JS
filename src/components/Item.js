import React from 'react'



export default function Item({post}) {


  return (

    <div>
            <div>
              <div>Producto: {post.producto}</div>
              <div>Categoría: {post.categoria}</div>
              <div>Cantidad: {post.cantidad} </div>
              <div>Precio: {post.precio}</div>   
            </div>                        
    </div>
    
  )
}
