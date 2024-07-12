console.log("%cF%cu%cn%cc%ci%co%cn%cs", 
    "font-weight: bold; color: maroon",
    "font-weight: bold; color: red",
    "font-weight: bold; color: orange",
    "font-weight: bold; color: yellow",
    "font-weight: bold; color: green",
    "font-weight: bold; color: blue",
    "font-weight: bold; color: purple",
    "font-weight: bold; color: pink");

// Función que muestra una string por la consola
function saludar() {
    console.log("Hola, clase!");
}
saludar();

// Función que devuelve una string
function saludo() {
    return "Hola, clase!";
}
console.log(saludo());

// Función con un parámetro que muestra una string por la consola
function saludarPersona(nom) {
    console.log(`Hola, ${nom}!`);
}
saludarPersona("David");

// Función con un parámetro que devuelve una string personalizada
function saludoPersona(nom) {
    return `Hola, ${nom}!!`;
}
console.log(saludoPersona("David"));



// Función a la que le pasemos un DNI y nos lo devuelva ofuscado
function dniofuscado(dni) { 
    if (dni.length !== 9) {
        return "DNI debe tener 9 caracteres.";
    }
    const visiblePart = dni.slice(-4); // Últimos 4 caracteres visibles
    const obscuredPart = '*'.repeat(dni.length - 4); // Asteriscos para el resto
    return obscuredPart + visiblePart;
}

console.log(dniofuscado("12345678A")); // Muestra: "*****678A"

let dni = "98765432B";

// Función que ofusca el dni guardado en una variable
function ofuscarDni() {
    dni = dniofuscado(dni);
}

ofuscarDni();
console.log(dni); // Muestra: "*****432B"

// una función a la que le pases un array de dos elementos y te devuelva el array invertido

/**
 * Invierte un array de dos elementos.
 * @param {Array} array - Un array de dos elementos.
 * @return {Array} El array invertido.
 */
function invertirArray(array) {
    if (array.length !== 2) {
        return "El array debe tener exactamente dos elementos.";
    }
    return [array[1], array[0]];
}

// Ejemplo de uso
const arrayOriginal = ["gat", "gos"];
const arrayInvertido = invertirArray(arrayOriginal);
console.log(arrayInvertido); // Muestra: ["gos", "gat"]

