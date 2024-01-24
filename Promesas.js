//Promesas 2

promesaExitosa.then((mensaje) => {
    console.log(mensaje);
}).catch((error) => {
    console.error(error);
});

let promesaConError = new Promise((resolve, reject) => {
    reject("Algo salio mal..");

});

promesaConError.then((mensaje) => { console.log(mensaje);
}).catch((error) => {
    console.error(error);
});