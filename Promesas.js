//fetch 7.1 = pagina de pokemon

fetch('https:fakestoreapi.com/products/1')
.then(resp => {
     if (resp.ok) {
          return resp.json()
     } else {
          throw new Error('NO existe el producto')
     }
     })
     .then(console.log)
     .catch(err => {
      console.log('Error en la peticion')
      console.log(err)
     })
    


