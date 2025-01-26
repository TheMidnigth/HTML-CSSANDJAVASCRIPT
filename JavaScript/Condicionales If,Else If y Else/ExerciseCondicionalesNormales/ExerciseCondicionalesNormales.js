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






