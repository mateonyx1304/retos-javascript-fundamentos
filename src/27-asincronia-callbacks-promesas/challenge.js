// Reto 27: Asincronía en JavaScript - callbacks y promesas

/**
 * Ejercicio 1: setTimeout básico
 * Usa setTimeout para mostrar un mensaje después de 2 segundos
 * Debe retornar "mensaje retrasado" después del tiempo especificado
 */
function mensajeRetrasado(callback) {
  setTimeout(() => {
    callback('mensaje retrasado');
  }, 2000);
}

/**
 * Ejercicio 2: Callback simple
 * Simula obtener datos de una API usando un callback
 * Después de 1.5 segundos, llama al callback con el string "datos recibidos"
 */
function obtenerDatos(callback) {
  setTimeout(() => {
    callback('datos recibidos');
  }, 1500);
}

/**
 * Ejercicio 3: Callback con error
 * Simula una operación que puede fallar
 * Si el parámetro exito es true, llama al callback con "operación exitosa"
 * Si es false, llama al callback con null y el error "falló la operación"
 */
function operacionConError(exito, callback) {
  setTimeout(() => {
    if (exito) {
      callback('operación exitosa', null);
    } else {
      callback(null, 'falló la operación');
    }
  })
}

/**
 * Ejercicio 4: Callback hell simple
 * Encadena 3 operaciones con callbacks:
 * 1. obtenerUsuario → callback con {id: 1, nombre: "Ana"}
 * 2. obtenerNotasPorUsuario → callback con ["nota1", "nota2"]
 * 3. procesarNotas → callback con "NOTAS PROCESADAS"
 */
function obtenerInfoCompleta(callback) {

  setTimeout(() => {
    const usuario = { id: 1, nombre: "Ana" };
    setTimeout(() => {
      const notas = ["nota1", "nota2"];
      setTimeout(() => {
        const resultado = "NOTAS PROCESADAS";
        callback(`${usuario.nombre}: ${resultado}`, null);
      }, 500);
    }, 500);
  }, 500);
}


/**
 * Ejercicio 5: Promesa básica
 * Crea una promesa que se resuelve después de 1 segundo con "promesa cumplida"
 */
function promesaBasica() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('promesa cumplida');
    }, 1000);
  });
}

/**
 * Ejercicio 6: Promesa con reject
 * Crea una promesa que se resuelve o rechaza según el parámetro exito
 * Si exito es true, resuelve con "éxito"
 * Si es false, rechaza con new Error("error en la operación")
 */
function promesaConError(exito) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (exito) {
        resolve('éxito');
      } else {
        reject(new Error('error en la operación'));
      }
    }, 1000);
  });
}

/**
 * Ejercicio 7: Encadenar promesas
 * Usa then para encadenar dos operaciones:
 * Primera promesa resuelve con un número, segunda promesa duplica ese número
 */
function encadenarPromesas() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(5);
    }, 1000)
  })
  .then((numero) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(numero * 2);
      }, 1000);
    });
  })
}

/**
 * Ejercicio 8: Promesa con setTimeout
 * Combina promesa con setTimeout para simular una llamada a API
 * Después de 2 segundos resuelve con {data: "respuesta api"}
 */
function simularApiCall() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({data: 'respuesta api'});
    }, 2000);
  })
}

/**
 * Ejercicio 9: Múltiples promesas
 * Usa Promise.all para ejecutar 3 promesas en paralelo
 * Cada promesa resuelve con un string diferente
 */
function multiplesPromesas() {
  const promesa1 = Promise.resolve('resultado 1');
  const promesa2 = Promise.resolve('resultado 2');
  const promesa3 = Promise.resolve('resultado 3');

  return Promise.all([promesa1, promesa2, promesa3]);
}

/**
 * Ejercicio 10: Convertir callback a promesa
 * Convierte una función que usa callback a una que retorna una promesa
 */
function callbackAPromesa(valor, callback) {
  setTimeout(() => {
    callback(valor * 2);
  }, 500);
}

function convertirCallbackAPromesa(valor) {
 return new Promise((resolve) => {
    callbackAPromesa(valor, (resultado) => {
      resolve(resultado);
    });
  });
}


module.exports = {
  mensajeRetrasado,
  obtenerDatos,
  operacionConError,
  obtenerInfoCompleta,
  promesaBasica,
  promesaConError,
  encadenarPromesas,
  simularApiCall,
  multiplesPromesas,
  convertirCallbackAPromesa
};
