let numero = 22;

if (numero % 2 == 0) {
    console.log("El numero: " + numero + " es par");
    /* document.write("El numero: " + numero + " es par"); */
} else {
    console.log("El numero: " + numero + " es impar");
    /* document.write("El numero: " + numero + " es impar"); */
}

let mensaje1 = 'hola';
let mensaje2 = 'keyner';
let resultado = mensaje1 + " " + mensaje2;
console.log(resultado);
//document.write(resultado);

let primerNombre = 'Keyner';
primerNombre += ' Alfonso';
console.log(primerNombre);
//document.write(primerNombre);

let string1 = "hola";
let string2 = "mundo";
let saludo = string1.concat(" " , string2);
console.log(saludo);
//document.write(saludo);

let primerMensaje = "Hola";
let segundoMensaje = "Mundo";
let result =  `${primerMensaje} ${segundoMensaje}`;
console.log(result); 
//document.write(`${primerMensaje} ${segundoMensaje}`);
