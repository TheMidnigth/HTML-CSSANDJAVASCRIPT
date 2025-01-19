let mensaje = "colombia";
console.log(`El nombre del jugador es: ${mensaje}`);

// tamaño de un texto
console.log(`El tamaño del texto es: ${mensaje.length}`);

// ver cantidad especifica de una palabra
console.log(`La cantidad de letras especifica que quiere ver son: ${mensaje.slice(0,4)}`);
console.log(`La cantidad de letras especifica que quiere ver son: ${mensaje.substring(0,4)}`);

// remplazar texto dentro de una variable
let saludo = "real madrid";
saludo = saludo.replace("madrid","cartagena");
console.log(saludo);
saludo = saludo.replace("real","atletico");
console.log(saludo);

//cambiar a mayuscula una palabra
console.log(`La palabra: ${mensaje.toUpperCase()}`);

// cambiar a miniscula una palabra
console.log(`La palabra: ${mensaje.toLowerCase()}`);

// unir palabra con concat
let mensaje1 = "entro a la univerdad";
let mensaje2 = "el 3 de febrero del 2025";
let mensajeFinal = mensaje1.concat(" ",mensaje2);
console.log(mensajeFinal);

// cortar palabras
console.log(`${mensaje.split("mbia")}`);