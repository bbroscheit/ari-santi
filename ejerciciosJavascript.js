
// Ejercicio 1: Calculadora simple

function sumar(a, b) {
  
}

function restar(a, b) {
  
}

function multiplicar(a, b) {
  
}

function dividir(a, b) {
  // Cuidadito: si b es 0, debe devolver "Error: division por cero"
  
}


// Ejercicio 2: Productos (array de objetos)

// productos = [{ nombre: "Mouse", precio: 5000 }, { nombre: "Teclado", precio: 12000 }, ...]

// Debe devolver un array solo con los nombres de los productos.
function listarNombres(productos) {
  
}

// Debe devolver un array con los productos cuyo precio sea mayor al "minimo" dado.
function filtrarPorPrecio(productos, minimo) {
  
}

// Debe devolver la suma total de los precios de todos los productos.
function calcularTotal(productos) {
  
}


// Ejercicio 3: Estadísticas de un array de números

// Debe devolver un objeto: { mayor, menor, promedio }
function estadisticas(numeros) {
  
}


// Ejercicio 4: Simular una consulta asincrónica

// Debe devolver una Promise que resuelve, después de "ms" milisegundos, con el valor { ok: true, dato: valor }.
// Pista: usá setTimeout adentro de un "new Promise((resolve) => {...})"
function consultaSimulada(valor, ms) {
  
}


// Ejercicio 5: Manejo de errores con una Promise que puede fallar

// Si "fallar" es true, la Promise debe rechazar con new Error("Fallo simulado").
// Si "fallar" es false, debe resolver con el valor { ok: true, dato: valor }.
function consultaConError(valor, fallar) {
  
}

// Esta función debe llamar a consultaConError, y usando try/catch (con await),
// devolver el dato si sale bien, o la string "Se manejo el error: <mensaje>" si falla.
async function manejarConsulta(valor, fallar) {
  // TU CODIGO ACA
}


// Ejercicio 6: Destructuring

// usuario = { id: 1, nombre: "Ana", email: "ana@mail.com", password: "1234", activo: true }
// Debe devolver un objeto SOLO con { id, nombre, email } (sin password ni activo).
// Pista: destructuring + rest operator, o simplemente armar el objeto a mano.
function datosPublicos(usuario) {
  // TU CODIGO ACA
}

// No tocar: esto exporta tus funciones para que el archivo de tests las pueda usar.
module.exports = {
  sumar,
  restar,
  multiplicar,
  dividir,
  listarNombres,
  filtrarPorPrecio,
  calcularTotal,
  estadisticas,
  consultaSimulada,
  consultaConError,
  manejarConsulta,
  datosPublicos,
};
