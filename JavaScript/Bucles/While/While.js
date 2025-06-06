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
/* let tanqueAgua = null;
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
} */

/* Escribe un programa en JavaScript que use un bucle while para sumar números ingresados por el usuario.
El programa debe seguir pidiendo números y sumarlos hasta que el usuario ingrese 0
,momento en el cual mostrará la suma total y finalizará. */
/* let numero9 = 0;
let suma = 0;

while (true) {
    numero9 = parseInt(prompt('Ingrese un numero: ',0));

    if (isNaN(numero9)) {
        alert('Ingrese un numero por favor');
    } else {
        suma += numero9;
    }

    if (numero9 === 0) {
        break;
    }
}

alert(`La suma total es: ${suma}`);
 */

/* Escribe un programa en JavaScript que use un bucle while para adivinar un número secreto. El programa debe generar un número aleatorio entre 1 y 10 y luego pedir al usuario que adivine el número. Seguirá pidiendo intentos hasta que el usuario acierte, mostrando mensajes de "Incorrecto, intenta de nuevo" o "¡Felicidades, adivinaste el número!" cuando acierte. */


/* let numeroSecreto = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let numero10 = parseInt(prompt('Ingrese un numero entre 1 y 10: ',1));

while (numero10 >= 1 && numero10 <= 10) {

    numero10 = parseInt(prompt('Ingrese un numero entre 1 y 10: ',1));

    if (isNaN(numero10)) {
        alert('Ingrese un numero valido');
    } 

    if (numero10 === numeroSecreto) {
        alert(`Felicidades el numero: ${numero10} es igual a: ${numero10}`);
        break;
    } else{
        alert(`Incorrecto intenta de nuevo`);
    }
    
} */

/* Desarrolla un programa en JavaScript que utilice un bucle while para simular un cajero automático. El usuario debe comenzar con un saldo inicial y podrá realizar operaciones de retiro ingresando un monto. El bucle debe continuar hasta que el usuario elija salir o hasta que el saldo sea insuficiente para realizar un retiro. Al final, debe mostrar el saldo restante. */

let saldoInicial = 50000;
let monto = 0;

while (monto <= saldoInicial) {
    let entrada = prompt('Ingrese un monto para retirar: ',0).toLowerCase();

    if (entrada === 'salir') {
        alert('Usted a salido del cajero automatico');
        break;
    }

    monto = parseInt(entrada);

    if (monto !== 10000 && monto !== 20000 && monto !== 50000) {
        alert("Monto no permitido. Inténtelo de nuevo.");
    } else{
        saldoInicial -= monto;
        alert(`El monto que esta retirando es: $${monto} y le queda en su saldo: $${saldoInicial}`);
    }

}

alert(`El saldo restante que te quedo es: $${saldoInicial}`);

/* Escribe un programa en JavaScript que use un bucle while para contar cuántos números pares hay en un rango dado por el usuario.

Requisitos:
Pedir al usuario un número inicial y un número final.
Contar cuántos números pares hay en ese rango.
Mostrar el resultado al final.
 */