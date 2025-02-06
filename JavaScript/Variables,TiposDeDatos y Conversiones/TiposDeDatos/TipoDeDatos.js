/*Declaración de Variables: Declara tres variables (nombre, edad, ciudad) 
y asígnales valores correspondientes.Luego, muestra los valores en la consola. */
let nombre = `keyner`;
let edad = 19;
let ciudad = `cartagena`;
console.log(`La informacion del usuario: ${nombre} es edad: ${edad} y ciudad: ${ciudad}`);

/* Cambio de Valores: Declara una variable precio con un valor inicial de 100.
 Luego, cambia su valor a 150 y muestra ambos valores en la consola. */
let precio = 100;
console.log(`El precio anterior es: $${precio}`);
precio = 150;
console.log(`El precio actual es: $${precio}`);

/* Uso de string:
Declara una variable mensaje con un texto de tu elección y muestra su longitud usando */
let message = `hola soy una variable de tipo texto y esto es un mensaje informativo`;
console.log(`El tamaño del siguiente mensaje es: ${message.length}`);

/* Uso de number:
Declara dos variables a y b con valores numéricos y realiza las operaciones básicas 
(suma, resta, multiplicación y división). */
let a = 20;
let b = 20;
let resultado = 0;

if (isNaN(a) || isNaN(b)) return console.log(`Esto no es un numero`);

resultado = a + b;
console.log(`El resultado de la siguiente suma es: ${resultado}`);

resultado = a - b;
console.log(`El resultado de la siguiente resta es: ${resultado}`);

resultado = a * b;
console.log(`El resultado de la siguiente multiplicacion es: ${resultado}`);

resultado = a / b;
if (b === 0) {
    console.log(`Lo siento pero no se puede dividir entre cero`);
} else{
    console.log(`El resultado de la siguiente division es: ${resultado}`);
}

/* Uso de boolean:
Declara una variable esMayor que almacene el resultado de comparar si 10 es mayor que 5. */
let isVerdadero = true;
let isFalso = false;
console.log(isVerdadero,isFalso);

let esmayor = 10 > 4;
console.log(esmayor);

/* Uso de undefined:
Declara una variable valor sin asignarle un valor y muestra su contenido en la consola. */
let valor;
console.log(valor);

/* Declara una variable numeroGrande con un valor muy grande usando BigInt
y realiza una operación matemática con otro BigInt. */
let numeroGrande1 = 122344555566970039432;
let numeroGrande2 = 141345345834523955239;
let resultadoGrande = numeroGrande1 + numeroGrande2;
console.log(`El resultado grande de la suma es: ${resultadoGrande}`);

/* Uso de null:
Declara una variable resultado con el valor null y muestra su tipo de dato con typeof. */
let valorVacio = null;
console.log(typeof valorVacio);

/* Uso de symbol:
Declara dos variables id1 e id2 con valores Symbol('id') y compara si son iguales. */
let id1 = Symbol('identificadores');
let id2 = Symbol('identificadores');
console.log(id1 === id2);

/* NaN */
let numero1 = 'keiner';
let numero2 = 20;
let resultadoNaN = numero1 / numero2;
console.log(resultadoNaN);

