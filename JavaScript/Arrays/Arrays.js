//*sintaxix para crear una matriz vacia
let arr = new Array();
let arry = [];

let numeros = [15,22,34,56,47];
console.log(numeros);

//*mostrar un elemento del arrays
console.log(`Primer elemento: ${numeros[0]}`);

//* cambiar el contenido de un arrays por otro
numeros[0] = 14;
console.log(`elemento cambiado: ${numeros}`)

//* una de las maneras para agregar elementos a un arrays
numeros[5] = 69;
console.log(`Lista actualizada : ${numeros}`);

//* la longitud del arrays
let listaCoches = ['ferrari','mazda','nissan','toyota','porsche'];
console.log(`La longitud del array es: ${listaCoches.length}`);

//* acceder al ultimo elemento de una lista
console.log(`Con length: ${listaCoches[listaCoches.length - 1]}`);
console.log(`Con at: ${listaCoches.at(-1)}`);

//* pop:Extrae el último elemento de la matriz y lo devuelve:
let frutas = ['manzana','pera','mango'];
console.log(frutas.pop());
console.log(frutas);

//* push:Añade el elemento al final de la matriz:
let edades = [18,22,60,39];
edades.push(10);
console.log(edades);

//* shift:Extrae el primer elemento de la matriz y lo devuelve:
let personas = ['ronaldo','messi','neymar','james'];
console.log(personas.shift());
console.log(personas);

//* unshift:Añade el elemento al principio de la matriz:
let salarios = [50000,20000,70000];
salarios.unshift(1000000);
console.log(salarios);

//*Métodos push y unshiftpueden agregar múltiples elementos a la vez:
let nombres = ['keyner'];
nombres.push('samuel','juan');
nombres.unshift('roswar','victor','yublian');
console.log(nombres);

//* unir varias arrays en uno solo con concat
let letras = ['a','b','c'];
let numeros1 = [1,2,3];
let unir = letras.concat(numeros1);
console.log(unir);

//*eliminar elementos a partir de un punto
let numeros2 = [22,45,65,100,200];
numeros2.splice(1,2);
console.log(numeros2);


//* copiar los elementos de una array
let cantidades = ['rasengan','bola de fuego','clones de sobra','dragon de agua','bola de agua','dragon de fuego'];
let kakashi = cantidades.slice(1,4);
console.log(kakashi);