/* Validación de Contraseña: Pide al usuario que ingrese una contraseña y
sigue pidiendo hasta que introduzca la correcta. */
/* let contraseña = prompt('Ingrese una contraseña: ', '');
const contraseñaValida = 'keyner200519*'

while (contraseña !== contraseñaValida) {
    alert('Contraseña incorrecta');
    contraseña =  prompt('Ingrese una contraseña Valida: ', '');
}

alert("¡Contraseña correcta! Acceso concedido."); */

/* Tabla de Multiplicar: Usa un while para imprimir la tabla de multiplicar de un número
 dado, desde el 1 hasta el 10. */
/* let numero2 = parseInt(prompt("Ingresa un número para ver su tabla de multiplicar:"));
let i = 1;

while (i <= 10) {
    alert(`${numero2} x ${i} = ${numero2 * i}`);
    i++;
}  */

/* Adivinar un Número: Genera un número aleatorio y pide al usuario que lo adivine,
repitiendo el intento hasta que acierte. */
/* let numero = parseInt(prompt('Adivina un numero del 1 al 20: ',0));
let numeroAdivinado = Math.round(Math.random()*20) + 1;

while(numero !== numeroAdivinado){
    alert('No adivinaste el numero');
    numero = parseInt(prompt('Intentalo de nuevo: ',0));
}

alert('Felicidades adivinaste el numero');
 */

/* Números Pares del 2 al 20: Usa un while para imprimir
en la consola todos los números pares entre 2 y 20. */
/* let numero3 = 2;
while (numero3 >= 2 && numero3 <= 20) {
    if(numero3 % 2 === 0){
        console.log(`Esto son todos los numeros pares entre 2 y 20: ${numero3}`);
    }
    numero3++;
} */

/* Imprimir números del 1 al 10: 
Usa un bucle while para mostrar en la consola los números del 1 al 10. */
let numero4 = 1;
while (numero4 <= 10) {
    console.log(numero4);
    numero4++;
}

/* Cuenta regresiva: Imprime una cuenta regresiva desde 10 hasta 1 usando while. */
let numero6 = 10;
while (numero6 > 0) {
    console.log(numero6);
    numero6--;
}

/* Validar entrada del usuario:
Pide al usuario que ingrese un número positivo y usa while para seguir pidiéndolo
hasta que ingrese un valor correcto. */
/* let numeroPositivo = parseInt(prompt('Ingrese un numero positivo: ',0));

while (isNaN(numeroPositivo) || numeroPositivo < 0) {
    alert(`El numero: ${numeroPositivo} ingresado no es positivo`);
    numeroPositivo = parseInt(prompt('Ingrese un numero positivo: ',0));
}

alert(`El numero: ${numeroPositivo} ingresado es positivo`);
 */
/* Simular un cajero automático:
Usa while para permitir que el usuario ingrese su PIN
 hasta que sea correcto o alcance el número máximo de intentos. */

/* const PIN = 2019;
let ingresarPIN = parseInt(prompt('Ingrese su PIN al cajero por favor: ',''));
let intentos = 5;

while(ingresarPIN !== PIN){
    alert(`El PIN que ingreso es incorrecto`);
    if (intentos > 0 && intentos <= 5) {
        intentos--;
        alert(`Te quedan: ${intentos} intentos`);
    }else{
        alert(`Acumulo muchos intentos vuelva en 5 minutos`);
    }
    ingresarPIN = parseInt(prompt('Ingrese su PIN al cajero por favor: ',''));
}

alert(`El Pin: ${ingresarPIN} es igual a: ${PIN}`); 
 */

/* Imprimir los números impares del 1 al 15 usando  */
let numero8 = 1;
while (numero8 <= 15) {
    console.log(numero8);
    numero8 += 2;
}

/* Crea un programa en JavaScript que utilice un bucle while para simular el llenado de un tanque de agua.
El tanque tiene una capacidad máxima de 100 litros y comienza vacío.
En cada iteración, se debe agregar una cantidad aleatoria de agua entre 5 y 15 litros.
El programa debe mostrar el nivel actual del tanque en cada iteración y detenerse cuando el tanque esté lleno. */
let tanqueAgua = null;
let suma = 0;

while (true) {

    tanqueAgua = parseInt(prompt('Ingrese una cantidad de agua en LT: ', 0));

    if (!isNaN(tanqueAgua)) {
        suma += tanqueAgua;
        
        if (suma >= 100) {
            alert(`El tanque alcanzo su limite`);
            break;
        }

        alert(`El nivel actual del tanque de agua es: ${suma} LT`);

    } else{
        alert(`Ingrese un numero por favor`);
    }
}

/* Crea un programa en JavaScript que simule una tienda con un stock de 20 productos. En cada iteración, un cliente compra una cantidad aleatoria de productos (entre 1 y 5).

El programa debe:

Mostrar cuántos productos compra el cliente en cada iteración.
Restar esa cantidad del stock.
Mostrar el stock restante.
Detenerse cuando el stock llegue a 0 y mostrar un mensaje de "Stock agotado". */

