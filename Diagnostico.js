// Función que imprime un número más uno
function imprimirNum(num) {
    console.log(num + 1);
    }
    // Llamamos a la función con un número, por ejemplo, 9
    imprimirNum(9);
    

// Función asíncrona simulada con una promesa
function funcionAsin() {
    return new Promise(resolve => {
    // Lógica asíncrona simulada
    setTimeout(() => {
    resolve();
    }, 1000); // Tiempo de espera de 1 segundo
    });
    }

    
    funcionAsin().then(() => {
    console.log("La promesa se cumplio");
  });
    
    // Imprimir en consola un conteo del 1 al 10 cada 800 ms
    const intervalId = setInterval(() => {
    const count = 1;
    if (count <= 10) {
    console.log(count);
    } else {
    console.error("¡Error! La iteración superó el valor 8");
    clearInterval(intervalId);
    }
    }, 800);
    
    // Mostrar mensaje de error en caso de que la iteración anterior supere el valor 8
    // Imprimir dos funciones de manera asíncrona
    async function ejecutarFuncionesAsincronas() {
    console.log("Inicio del proceso");
    
    try {
    await Promise.all([
    funcionAsincrona(),
    funcionAsincrona()
    ]);
    } catch (error) {
    console.error("¡Error en las funciones asíncronas!", error);
    } finally {
    console.log("Fin del proceso");
    }
    }
    
    ejecutarFuncionesAsincronas();