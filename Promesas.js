// Funcion de la solicitud
function solicitud(url) {
    //solicitud HTTP GET a la URL proporcionada utilizando la función fetch
    fetch(url)
      .then((response) => {
        // Verifica si la respuesta es exitosa
        if (!response.ok) {
          // Si no es exitosa, manda un error con el mensaje
          throw new Error(`Error en la petición: ${response.status}`);
        }
        // Si es exitosa, devuelve el contenido como texto
        return response.text();
      })
      .then((html) => {
        // Se obtiene el HTML y se agrega en el cuerpo del documento.
        document.querySelector("body").innerHTML = html;
      })
      .catch((error) => {
        // En caso de error, realiza una nueva solicitud a una URL.
        solicitud("not-found.html");
      });
  }
  
  // Llama a la función solicitud con la URL
  solicitud("https://pokeapi.co/api/v2/pokemon/ditto");
  
