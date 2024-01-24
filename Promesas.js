//fetch 7

fetch('https:fakestoreapi.com/products/1')
.then(resp => {

     resp.json().then(console.log)
     })
     .catch(err => {
      console.log('Error en la peticion')
      console.log(err)
     })
    


