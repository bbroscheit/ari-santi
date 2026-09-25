//No toquen nada de aca, es solo para testear sus funciones y ni dios sabe como funciona, asi que no rompan nada.

const assert = require("assert");
const ej = require("./ejerciciosJavascript.js");

let pasados = 0;
let fallados = 0;

function test(nombre, fn) {
  try {
    fn();
    console.log(`✅ ${nombre}`);
    pasados++;
  } catch (err) {
    console.log(`❌ ${nombre}`);
    console.log(`   → ${err.message}`);
    fallados++;
  }
}

async function testAsync(nombre, fn) {
  try {
    await fn();
    console.log(`${nombre}`);
    pasados++;
  } catch (err) {
    console.log(`${nombre}`);
    console.log(`   → ${err.message}`);
    fallados++;
  }
}

async function run() {
  console.log("\n--- Ejercicio 1: Calculadora ---");
  test("sumar(2, 3) === 5", () => assert.strictEqual(ej.sumar(2, 3), 5));
  test("restar(10, 4) === 6", () => assert.strictEqual(ej.restar(10, 4), 6));
  test("multiplicar(3, 4) === 12", () => assert.strictEqual(ej.multiplicar(3, 4), 12));
  test("dividir(10, 2) === 5", () => assert.strictEqual(ej.dividir(10, 2), 5));
  test("dividir(5, 0) === 'Error: division por cero'", () =>
    assert.strictEqual(ej.dividir(5, 0), "Error: division por cero"));

  console.log("\n--- Ejercicio 2: Productos ---");
  const productos = [
    { nombre: "Mouse", precio: 5000 },
    { nombre: "Teclado", precio: 12000 },
    { nombre: "Monitor", precio: 80000 },
  ];
  test("listarNombres devuelve los nombres", () =>
    assert.deepStrictEqual(ej.listarNombres(productos), ["Mouse", "Teclado", "Monitor"]));
  test("filtrarPorPrecio(6000) devuelve Teclado y Monitor", () =>
    assert.deepStrictEqual(ej.filtrarPorPrecio(productos, 6000), [
      { nombre: "Teclado", precio: 12000 },
      { nombre: "Monitor", precio: 80000 },
    ]));
  test("calcularTotal suma todos los precios", () =>
    assert.strictEqual(ej.calcularTotal(productos), 97000));

  console.log("\n--- Ejercicio 3: Estadísticas ---");
  test("estadisticas([4, 8, 2, 10]) devuelve mayor/menor/promedio correctos", () => {
    const r = ej.estadisticas([4, 8, 2, 10]);
    assert.strictEqual(r.mayor, 10);
    assert.strictEqual(r.menor, 2);
    assert.strictEqual(r.promedio, 6);
  });

  console.log("\n--- Ejercicio 4: Promise simulada ---");
  await testAsync("consultaSimulada resuelve con { ok: true, dato }", async () => {
    const r = await ej.consultaSimulada("hola", 10);
    assert.deepStrictEqual(r, { ok: true, dato: "hola" });
  });

  console.log("\n--- Ejercicio 5: Manejo de errores ---");
  await testAsync("consultaConError(x, false) resuelve bien", async () => {
    const r = await ej.consultaConError("dato-ok", false);
    assert.deepStrictEqual(r, { ok: true, dato: "dato-ok" });
  });
  await testAsync("consultaConError(x, true) rechaza con Error", async () => {
    await assert.rejects(() => ej.consultaConError("dato", true), /Fallo simulado/);
  });
  await testAsync("manejarConsulta con fallar=false devuelve el dato", async () => {
    const r = await ej.manejarConsulta("dato-bueno", false);
    assert.strictEqual(r, "dato-bueno");
  });
  await testAsync("manejarConsulta con fallar=true devuelve mensaje manejado", async () => {
    const r = await ej.manejarConsulta("dato-malo", true);
    assert.strictEqual(r, "Se manejo el error: Fallo simulado");
  });

  console.log("\n--- Ejercicio 6: Destructuring ---");
  test("datosPublicos oculta password y activo", () => {
    const usuario = { id: 1, nombre: "Ana", email: "ana@mail.com", password: "1234", activo: true };
    assert.deepStrictEqual(ej.datosPublicos(usuario), { id: 1, nombre: "Ana", email: "ana@mail.com" });
  });

  console.log(`\n=================================`);
  console.log(`Resultado: ${pasados} pasados, ${fallados} fallados`);
  console.log(`=================================\n`);
  process.exit(fallados > 0 ? 1 : 0);
}

run();
