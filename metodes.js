// Los métodos son funciones asociadas a un objeto.
// Ejemplo: .toString() es un método de los números.
console.log("Mètodes arrays i strings");

let text = "   Aquesta és una string que ha escrit l'Omar per fer exercicis de mètodes   ";

// Probar métodos de string

// Eliminar espacios en blanco al principio y al final
console.log(text.trim()); // "Aquesta és una string que ha escrit l'Omar per fer exercicis de mètodes"

// Añadir padding al inicio y al final
console.log(text.padStart(text.length + 5, '*')); // "*****   Aquesta és una string que ha escrit l'Omar per fer exercicis de mètodes   "
console.log(text.padEnd(text.length + 10, '!'));   // "   Aquesta és una string que ha escrit l'Omar per fer exercicis de mètodes   !!!!!!!!!"

// Reemplazar una subcadena
console.log(text.replace("Omar", "Pere")); // "   Aquesta és una string que ha escrit l'Pere per fer exercicis de mètodes   "

// Reemplazar todas las ocurrencias de una subcadena
console.log(text.replaceAll(" ", "-")); // "---Aquesta-és-una-string-que-ha-escrit-l'Omar-per-fer-exercicis-de-mètodes---"

// Dividir la cadena en un array
console.log(text.split(" ")); // ["", "", "", "Aquesta", "és", "una", "string", "que", "ha", "escrit", "l'Omar", "per", "fer", "exercicis", "de", "mètodes", "", "", ""]

// Convertir a mayúsculas
console.log(text.toUpperCase()); // "   AQUESTA ÉS UNA STRING QUE HA ESCRIT L'OMAR PER FER EXERCICIS DE MÈTODES   "

// Convertir a minúsculas
console.log(text.toLowerCase()); // "   aquesta és una string que ha escrit l'omar per fer exercicis de mètodes   "

// Extraer una parte de la cadena
console.log(text.slice(3, 15)); // "Aquesta és "

// Probar métodos de búsqueda

// Obtener el índice de la primera ocurrencia de una subcadena
console.log(text.indexOf("Omar")); // 39

// Comprobar si una subcadena está incluida
console.log(text.includes("exercicis")); // true

// Comprobar si la cadena empieza con una subcadena
console.log(text.startsWith("Aquesta")); // false (por los espacios al inicio)

// Comprobar si la cadena termina con una subcadena
console.log(text.endsWith("mètodes   ")); // true

// Gestionar datos con bucles y condicionales

let data0 = "NOM Omar";
let data1 = "COG Olmedo";
let data2 = "AGE 33";

let data = "NOM Omar COG Olmedo AGE 33";

// Dividir la cadena de datos en un array de palabras
let dataArray = data.split(" ");

// Crear un objeto para almacenar los datos
let dataObject = {};

// Recorrer el array y asignar los valores al objeto
for (let i = 0; i < dataArray.length; i += 2) {
    let key = dataArray[i];
    let value = dataArray[i + 1];
    dataObject[key] = value;
}

console.log(dataObject); // { NOM: "Omar", COG: "Olmedo", AGE: "33" }

// Usar bucles y condicionales para gestionar datos

// Imprimir los datos en formato legible
for (let key in dataObject) {
    if (dataObject.hasOwnProperty(key)) {
        console.log(`${key}: ${dataObject[key]}`);
    }
}

// Ejemplo de condicional
if (parseInt(dataObject.AGE) > 30) {
    console.log("La edad es mayor de 30.");
} else {
    console.log("La edad es 30 o menor.");
}



// Ofuscar DNI
let dni = "12345678A";
console.log("DNI completo: " + dni);
console.log("DNI ofuscado: " + dni.slice(0, -4).padEnd(dni.length, "x"));

//cambiar nombre
console.log("Text original: '" + text + "'");
console.log("Text alterat: '" + text.trim().replace("l'Omar", "el profe") + "'");

// TODO: censurar el nombre en el texto de arriba
let censura = "el profe";
console.log("Text normal: " + text);
console.log("Text censurat: " + text.replace(/l'Omar/g, "X".repeat("l'Omar".length)));
