// Reto 29: Async/await vs promesas en JavaScript

/**
 * Ejercicio 1: Función utilidad esperar
 * Crea una función que retorna una promesa que se resuelve después de ms milisegundos
 * Debe usar setTimeout y new Promise
 */
function esperar(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

/**
 * Ejercicio 2: Función asíncrona básica
 * Crea una función async que usa esperar para simular una operación
 * Después de 100ms debe retornar { id: 1, nombre: "Usuario" }
 */
async function obtenerUsuario() {
  await esperar(100);
  return { id: 1, nombre: 'Usuario'};
}

/**
 * Ejercicio 3: Async con parámetro
 * Crea una función async que recibe un usuarioId
 * Usa esperar(150) y retorna { usuarioId, notas: [10, 9, 8] }
 */
async function obtenerNotas(usuarioId) {
  await esperar(150);
  return { usuarioId, notas: [10, 9, 8] };
}

/**
 * Ejercicio 4: Procesamiento con async
 * Crea función async que recibe un objeto con notas
 * Usa esperar(100) y retorna el promedio de las notas
 */
async function procesarNotas(data) {
  await esperar(100);
  const promedio = data.notas.reduce((a, b) => a + b) / data.notas.length;
  return {promedio};
}

/**
 * Ejercicio 5: Orquestación con async/await
 * Combina las funciones anteriores en orden:
 * obtenerUsuario → obtenerNotas → procesarNotas
 * Usa try/catch para manejar errores
 */
async function obtenerPromedioUsuario() {
  try {
    const usuario = await obtenerUsuario();
    const data = await obtenerNotas(usuario.id);
    const resultado = await procesarNotas(data);
    return resultado;
  }
  catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

/**
 * Ejercicio 6: Promesa con then/catch
 * Implementa el mismo flujo anterior pero con then/catch
 * Sin usar async/await, solo promesas encadenadas
 */
function obtenerPromedioConPromesas() {
  return obtenerUsuario()
  .then((usuario) => obtenerNotas(usuario.id))
  .then((data) => procesarNotas(data))
  .catch((error) => {
    (console.error)('Error:', error);
    throw error;
    })
  }

/**
 * Ejercicio 7: Manejo de errores con async
 * Crea función async que lanza un error si el usuarioId es 0
 * Usa throw new Error("Usuario no válido")
 */
async function validarUsuario(usuarioId) {
  await esperar(50);
  if (usuarioId === 0) {
    throw new Error('Usuario no válido');
  }
  return {id: usuarioId, valido: true};
}

/**
 * Ejercicio 8: Múltiples awaits en paralelo
 * Usa Promise.all con await para ejecutar múltiples operaciones
 * Debe ejecutar 3 funciones que retornan promesas en paralelo
 */
async function operacionesParalelas() {
  const promesa1 = esperar(100).then(() => "resultado 1");
  const promesa2 = esperar(150).then(() => "resultado 2");
  const promesa3 = esperar(200).then(() => "resultado 3");
  
  const resultados = await Promise.all([promesa1, promesa2, promesa3]);
  return resultados;
}

/**
 * Ejercicio 9: Conversión de callback a async
 * Convierte una función callback a async/await
 */
function callbackAsincrono(valor, callback) {
  setTimeout(() => {
    callback(valor * 3);
  }, 200);
}

async function convertirCallbackAsync(valor) {
  return new Promise((resolve) => {
    callbackAsincrono(valor, (resultado) => {
      resolve(resultado);
    });
  });
}

/**
 * Ejercicio 10: Encadenamiento mixto
 * Combina async/await con then/catch en el mismo flujo
 * Demuestra que ambos enfoques pueden coexistir
 */
async function flujoMixto() {
  try {
    const usuario = await obtenerUsuario();
    return Promise.resolve(usuario)
    .then((user) => obtenerNotas(user.id))
    .then(async (data) => {
      const resultado = await procesarNotas(data);
      return resultado;
    });
  }   catch (error) {
    console.error('Error en flujo mixto:', error);
    throw error;
  }
}

module.exports = {
  esperar,
  obtenerUsuario,
  obtenerNotas,
  procesarNotas,
  obtenerPromedioUsuario,
  obtenerPromedioConPromesas,
  validarUsuario,
  operacionesParalelas,
  convertirCallbackAsync,
  flujoMixto
};
