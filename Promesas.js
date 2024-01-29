//Leer archivos html 
fetch('not-found.html')
.then(resp => resp.text())
.then(html => {
    document.querySelector('body').innerHTML = html
})
.catch(err => {
    console.log('Error en la peticion')
    console.log(err)
})
