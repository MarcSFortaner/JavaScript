// ESPACIO = "-";

// TODO: arrays, objects, arrays son grupos ordenados de valores.

let a = 1;
let b = 2;

// usando desestructuración
[a, b] = [b, a];

console.log(a, b); // Debería imprimir: 2 1

// arrays de animalicos

// más arrays
const animalEmojis = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨"];

const dog = "🐶";

console.log(animalEmojis[4], dog, animalEmojis[8]); // Debería imprimir: 🐰 🐶 🐨


//Ejercicio de COCHES


const cochesArray = [
    {
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
        año: 2020
    },
    {
        marca: "Honda",
        modelo: "Civic",
        color: "Azul",
        año: 2019
    },
    {
        marca: "Ford",
        modelo: "Focus",
        color: "Blanco",
        año: 2018
    },
    {
        marca: "Chevrolet",
        modelo: "Pepe",
        color: "Negro",
        año: 2021
    },
    {
        marca: "Nissan",
        modelo: "Patrol",
        color: "Gris",
        año: 2022
    }
];

console.log(cochesArray);

// crear un array que contenga una lista de una de las propiedades de los objetos

const modelos = cochesArray.map(coche => coche.modelo);

console.log(modelos); // Debería imprimir: ["Corolla", "Civic", "Focus", "Pepe", "Patrol"]



// crear una variable que contenga la suma de una propiedad que sea numérica

const sumaAños = cochesArray.reduce((total, coche) => total + coche.año, 0);

console.log(sumaAños); // Debería imprimir 10100 si los años son 2022, 2021, 2020, 2019, 2018



// mostrar por consola todo lo anterior


mostrarTodo();

// Mostrar una frase que resuma las propiedades de cada objeto
cochesArray.forEach(coche => {
    let resumen = `El coche es un ${coche.marca} ${coche.modelo}, color ${coche.color}, del año ${coche.año}.`;
    console.log(resumen);
});

  
  //mostrar todos los objetos en forma de tabla

  
console.table(cochesArray);


