/* Ejercicio 1: Crea un programa que verifique si un número dado es par o impar. */
let numero = 23;
let numeroPar = (numero % 2 === 0) ? `El numero: ${numero} es par`
:`El numero: ${numero} es impar`;
console.log(numeroPar);

/* Ejercicio 2: Escribe un código que determine si un año es bisiesto o no. */
let año = 1300;
let añoBiciesto = (año % 4 === 0 && (año % 100 !== 0 || año % 400 === 0))
    ? `El año: ${año} es un año biciesto`
    :`El año: ${año} no es un año biciesto`
console.log(añoBiciesto);

/* Ejercicio 3: Escribe un programa que lea un número y verifique si es positivo, negativo o cero. */
let numero1 = -12;
let numeroVerifica = (numero1 === 0) ? 'El numero es cero':
    (numero1 < 0) ? 'El numero es negativo':'El numero es positivo'
console.log(numeroVerifica);

/* Ejercicio 4: Escribe un programa que evalúe si un número es divisible por 3 y 5, 3, o 5. */
let numero2 = 15;
let numeroDivisible = (numero2 % 3 === 0 && numero2 % 5 === 0)
    ? `El numero: ${numero2} es divisible entre 3 y 5`:
    (numero2 % 3 === 0) ? `El numero: ${numero2} es divisible entre 3`:
    (numero2 % 5 === 0) ? `El numero: ${numero2} es divisible entre 5`:
    'No es divisible por ninguno';
console.log(numeroDivisible);

