/*
1.Crea un array llamado frutas con los valores
["manzana", "plátano", "naranja"] y muestra el segundo elemento en la consola.
*/
let frutas = ['manzana','pera','mango','piña','uva'];
console.log(`El segundo elemento de la lista: ${frutas} es ${frutas.at(1)}`);

/* Crea un array llamado numeros con los valores [1, 2, 3].
Agrega el número 4 al final del array.
Elimina el primer elemento.
Muestra el array actualizado. */
let valores = [1,2,3];
valores.push(4);
valores.shift();
console.log(valores);

/* Crea un array llamado animales con los valores ["perro", "gato", "pez"].
Verifica si el array contiene "gato" y muestra true o false en la consola. */
let animales = ['perro','gato','pajaro','conejo'];
let animalExis = animales.includes('gato');
console.log(animalExis);

/* Crea un array llamado dias con los valores ["lunes", "martes", "miércoles"].
Invierte el orden de los elementos y muestra el array resultante. */
let dias = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo'];
dias.reverse();
console.log(dias);

let numeros = [99,150,202,10,24,54];
numeros.sort((a,b) => a - b); // ordena de forma ascendente
/* numeros.sort((a,b) => b - a); ordena de forma descedente */
console.log(numeros);

/* Crea un array llamado numeros con los valores [5, 8, 12, 19, 22].
Usa el método filter para obtener un nuevo array con números mayores a 10. */
let numero1 = [5,8,12,19,22];
let numerosMayores = numero1.filter(numero => numero > 10);
console.log(`${numerosMayores}`);

/* Crea un array llamado precios con los valores [10, 20, 30].
Usa el método map para crear un nuevo array con el doble del valor de cada elemento. */
let precio = [10,20,30,40];
let dobleprecio = precio.map(numero => numero * numero);
console.log(dobleprecio);

/* Crea un array llamado valores con los valores [1, 2, 3, 4].
Usa el método reduce para obtener la suma total de los elementos del array. */
let valores1 = [1,2,3,4,5];
let sumaTotal = valores1.reduce((acumulador,valorActual) => acumulador + valorActual, 0);
console.log(sumaTotal);

/* Crea un array llamado nombres con los valores ["Juan", "Ana", "Luis", "Marta"].
Usa el método slice para obtener un nuevo array con los elementos desde el índice 1 hasta el índice 3. */
let nombres = ['juan','ana','luis','marta'];
let copiarNombres = nombres.slice(1,4);
console.log(copiarNombres);