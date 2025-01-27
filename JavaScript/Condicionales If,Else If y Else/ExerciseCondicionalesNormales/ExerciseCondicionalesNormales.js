/* Mayor de Edad: Escribe un programa que pida la edad de una persona
y determine si es mayor o menor de edad (18 años o más es mayor de edad). */
let edad = 18;
if (edad >= 18) {
    console.log(`Eres mayor de edad`);
} else {
    console.log(`Eres menor de edad`)
}

/* Número Par o Impar: Crea un programa que reciba 
un número e imprima si es par o impar. */
//* Creamos una variable llamada numero y la inicializamos
let numero = 2352;

//*Creamos la condicion para saber si es par o impar
if (numero % 2 === 0) {
    console.log(`El numero: ${numero} es un numero par`);
} else {
    console.log(`El numero: ${numero} es un numero impar`);
}

/* Calificación: Escribe un programa que pida una calificación numérica (0-10) 
y determine si el estudiante aprobó o reprobó (8 o más es aprobado). */
let calificación = 7;

if (calificación >= 7) {
    console.log(`Usted aprobo la asignatura con una nota de: ${calificación}`);
} else {
    console.log(`Reprobo la asignatura con una nota de: ${calificación}`);
}

/* Días de la Semana: Pide un número del 1 al 7 y muestra el nombre 
del día correspondiente de la semana (1 para Lunes, 2 para Martes, etc.). */
let dia = 6;

if (dia === 1) {
    console.log(`Es lunes`);
} else if(dia === 2){
    console.log(`Es martes`);
} else if(dia === 3) {
    console.log(`Es miercoles`);
} else if (dia === 4) {
    console.log(`Es jueves`);
} else if (dia === 5) {
    console.log(`Es viernes`);
} else if (dia === 6 || dia === 7) {
    console.log(`Es fin de semana`);
} else{
    console.log(`Ese dia de la semana no existe`);
}

/* Máximo de Tres Números: Escribe un programa que reciba 
tres números y determine cuál es el mayor. */
let numero1 = 10;
let numero2 = 10;
let numero3 = 10;

if (numero1 > numero2 && numero1 > numero3) {
    console.log(`El numero: ${numero1} es mayor a: ${numero2} y ${numero3}`);
} else if (numero2 > numero1 && numero2 > numero3) {
    console.log(`El numero: ${numero2} es mayor a: ${numero1} y ${numero3}`);
} else if (numero3 > numero1 && numero3 > numero2) {
    console.log(`El numero: ${numero3} es mayor a: ${numero1} y ${numero2}`);
} else{
    console.log(`Los numeros: ${numero1},${numero2} y ${numero3} son iguales`);
}

/* Contraseña Correcta: Crea un programa que pida una contraseña y 
verifique si es correcta o no (la contraseña correcta es "secreto123"). */
let contraseña = 'secreto123';
let contraseñaCorrecta = `secreto123`;

if (contraseña.trim() === "") {
    console.log(`Ingrese una contraseña por favor`);
} else if (contraseña === contraseñaCorrecta) {
    console.log(`Esta es la contraseña correcta`);
} else{
    console.log(`Contraseña incorrecta`);
}

/* Rango de Edad para Conducir: Escribe un programa que pida la edad 
de una persona y determine si puede obtener una licencia de conducir 
(edad mínima: 18 años, edad máxima: 70 años). */
let age = 24;

if (age >= 18 && age <= 70) {
    console.log(`Usted puede obtener una licencia de conducir`);
} else {
    console.log(`Usted no puede obtener una licencia de conducir`);
}

/* Tamaño de la Contraseña: Crea un programa que pida una contraseña 
y determine si tiene al menos 8 caracteres. Si es mayor o igual a 8, 
muestra "Contraseña segura", de lo contrario, muestra "Contraseña insegura". */
let password = 'keiner1005';

if (password.length >= 8) {
    console.log(`La contraseña: ${password} es segura`);
} else {
    console.log(`La contraseña: ${password} es insegura`);
}

/* Escribe una función que reciba la edad de una persona y devuelva el costo de entrada al parque:
Menores de 5 años: entrada gratis.
De 5 a 17 años: $10.
Mayores de 17: $20. */
let year = 18;
if (year <= 5) {
    console.log(`El costo de la entrada es gratis`);
} else if (year >= 6 && year <= 17) {
    console.log(`El costo de la entrada es de $10`);
} else{
    console.log(`El costo de la entrada es de $20`);
}

/* Crea una función que reciba una palabra y determine si es un palíndromo 
(se lee igual al derecho y al revés).Devuelve "Es palíndromo" o "No es palíndromo". */
let palabra = 'hola'.toLowerCase();
let isPalindromo = palabra.split('').reverse().join('');

if (palabra === isPalindromo ) {
    console.log(`La palabra: ${palabra} es palindromo`);
} else {
    console.log(`La palabra: ${palabra} no es palindromo`);
}

/* Crea una función que reciba dos números. Si ambos son pares, devuelve su producto; 
si ambos son impares, devuelve su división (redondeada hacia abajo).
Si son diferentes, devuelve la suma de ambos. */

let number1 = 12;
let number2 = 23;

if (number1 % 2 === 0 && number2 % 2 === 0) {
    resultado = number1 * number2;
    console.log(`Ambos numeros son pares`);
    console.log(`El resultado de esto es: ${resultado}`);
} else if (number1 % 2 !== 0 && number2 % 2 !== 0) {
    resultado = number1 / number2;
    redondeoAbajo = Math.floor(resultado);
    console.log(`Ambos numeros son impares`);
    console.log(`El resultado de esto es: ${redondeoAbajo}`);
} else{
    resultado = number1 + number2;
    console.log(`Ambos numeros son diferentes`);
    console.log(`El resultado de esto es: ${resultado}`);
}

/* Solicita al usuario que ingrese una temperatura y muestra un mensaje dependiendo de su rango:
Menor a 0: "Hace mucho frío."
Entre 0 y 15: "Hace frío."
Entre 16 y 30: "El clima es agradable."
Mayor a 30: "Hace calor." */

let temperatura = 30;

if (temperatura < 0) {
    console.log('Hace mucho frio');
} else if (temperatura >= 0 && temperatura <= 15) {
    console.log('Hace frio');
} else if (temperatura >= 16 && temperatura <= 30) {
    console.log('El clima es agradable');
} else if (temperatura > 30) {
    console.log('Hace calor');
} else{
    console.log('Ingresa una temperatura valida');
}

/* Crea un programa que guarde un número secreto (por ejemplo, 7). 
Luego, pide al usuario que adivine el número.
Si acierta, muestra: "¡Adivinaste!", si es mayor, muestra:
"El número es menor.", y si es menor, muestra: "El número es mayor." */
let numero4 = 10;
let numeroSecreto = Math.round(Math.random()*20);

if (numero4 === numeroSecreto) {
    console.log('Adivinaste');
    console.log(numeroSecreto);
} else if(numero4 > numeroSecreto){
    console.log('El numero es menor');
    console.log(numeroSecreto);
} else if(numero4 < numeroSecreto){
    console.log('El numero es mayor');
    console.log(numeroSecreto);
} else{
    console.log('Ingrese un numero valido');
}