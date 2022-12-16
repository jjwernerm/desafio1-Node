const fs = require('fs');
const citas = require('./citas.json')

// Función para registrar y agregar propiedades
const registrar = (nombre, edad, animal, color, enfermedad) => {

    citas.push({
      nombre: nombre,
      edad: edad,
      animal: animal,
      color: color,
      enfermedad: enfermedad
    });

    // Para escribir el archivo con el módulo File System
    fs.writeFileSync('citas.json', JSON.stringify(citas));  
}

// Función para leer el registro de citas.json
const leer = () => {  

  // Para leer el archivo con el módulo File System
  const citas = fs.readFileSync('citas.json', 'utf8');

  JSON.parse(citas).forEach((cita) => {
    console.log(cita)
  });
    
}

// Función para vaciar el arreglo de objetos citas.json
const vaciar = () => {  

  fs.writeFileSync('citas.json', '[]');
  
}

// Importo el módulo peraciones.js
module.exports = { registrar, leer, vaciar }