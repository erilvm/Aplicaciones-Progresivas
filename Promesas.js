//ejercicio3.1 una pagina nuestra la que deseamos

fetch('https://www.google.com.mx/?hl=es')
.then(resp => resp.text())
.then(html => {
    document.open()
    document.write(html)
    document.close()
})
