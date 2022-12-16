// Importo el módulo peraciones.js
const { registrar, leer, vaciar } = require('./operaciones.js');

const argumentos = process.argv.slice(2);

const operacion = argumentos[0];
const nombre = argumentos[1];
const edad = argumentos[2];
const animal = argumentos[3];
const color = argumentos[4];
const enfermedad = argumentos[5];

if (operacion != 'r' && operacion != 'm' && operacion != 'l' && operacion != 'x') {
  console.log('');
  console.log('Escribe la letra (ele) "l" para ingresar a la lista de opciones, ejemplo: node index l');
} 
else if (operacion === 'l') {
  console.log('');
  console.log('r => Resgistrar una nueva cita.');
  console.log('m => Mostrar todas las citas registradas.');
  console.log('x => Eliminar todos los registros.');
  console.log('');
  console.log('Para registrar:');
  console.log('node index r nombre edad animal color enfermedad');
  console.log('');
  console.log('Para mostrar:');
  console.log('node index m');
  console.log('');
  console.log('Para eliminar:');
  console.log('node index x');
}
else if (operacion === 'r') {
  registrar(nombre, edad, animal, color, enfermedad);
  console.log('');
  console.log(`Registro exitoso, pronto se atenderá a ${nombre} con el veterinario.`);
}
else if (operacion === 'm') {
  console.log('');
  leer();
}
else if (operacion === 'x') {
  console.log('');
  vaciar();
  console.log('Se eliminaron todas las citas');    
}