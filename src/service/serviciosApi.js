function getPosts() {
    return new Promise((resolve, reject) => {
      fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
  }
  function obtenerProducto(idProducto) {
    return new Promise((resolve, reject) => {
      fetch(`https://jsonplaceholder.typicode.com/todos/${idProducto}`)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
  }
  
  module.exports = {
    obtenerProducto,
    getPosts,
  }
  
