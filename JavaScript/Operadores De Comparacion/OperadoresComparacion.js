/* Ejercicio 1: Igualdad simple
Escribe un programa que compare dos números. Declara dos variables con valores diferentes y verifica si son iguales usando el operador ==.
 */
let numero1 = parseInt(prompt("Ingrese un numero: "));
let numero2 = parseInt(prompt("Ingrese un segundo numero:"));
alert(numero1 == numero2);
console.log(numero1 == numero2);

/* 
Ejercicio 2: Igualdad estricta
Declara una variable con un número y otra con el mismo valor como string. Comprueba si son estrictamente iguales utilizando ===.
 */
let numero3 = parseInt(prompt("Ingrese un numero:"));
let numero4 = prompt("Ingrese un numero:");
alert(numero3 === numero4);
console.log(numero3 === numero4);

/*
Ejercicio 3: Desigualdad simple
Crea un programa que verifique si una variable no es igual a otra utilizando el operador !=.
 */
let numero_desigual1 = parseInt(prompt("Ingrese un numero:"));
let numero_desigual2 = parseInt(prompt("Ingrese otro numero:"));
alert(numero_desigual1 != numero_desigual2);
console.log(numero_desigual1 != numero_desigual2);

/* 
Ejercicio 4: Desigualdad estricta
Declara dos variables, una con un número y otra con el mismo valor como string. Verifica si son estrictamente diferentes usando !==.
*/
let numero_desigual3 = parseInt(prompt("Ingrese un numero:"));
let numero_desigual4 = prompt("Ingrese otro numero:");
alert(numero_desigual3 !== numero_desigual4);
console.log(numero_desigual3 !== numero_desigual4);

/* 
Ejercicio 5: Mayor que
Escribe un programa que compare si un número es mayor que otro utilizando >.
*/
let numero5 = parseInt(prompt("Ingrese el primer numero:"));
let numero6 = parseInt(prompt("Ingrese el segundo numero:"));
alert(numero5 > numero6);
console.log(numero5 > numero6);

/* 
Ejercicio 6: Mayor o igual
Crea un programa que verifique si un número es mayor o igual a otro usando el operador >=.
*/
let numero7 = parseInt(prompt("Ingrese el primer numero:"));
let numero8 = parseInt(prompt("Ingrese el segundo numero:"));
alert(numero7 >= numero8);
console.log(numero7 >= numero8);

/* 
Ejercicio 7: Comparación de strings
Declara dos variables con cadenas de texto. Verifica si la primera cadena es menor que la segunda usando <.
*/
let mensaje1 = prompt("Ingrese el primer mensaje:");
let mensaje2 = prompt("Ingrese el segundo mensaje:");
alert(mensaje1 < mensaje2);
console.log(mensaje1 < mensaje2);

/* 
Ejercicio 8: Comparación de números y strings
Declara una variable con un número y otra con un string que contenga un número. Verifica si son iguales utilizando == y explica por qué sucede eso.
*/
let numero9 = parseInt(prompt("Ingrese un numero:"));
let numero10 = prompt("Ingrese un numero:");
alert(numero9 == numero10);
console.log(numero9 == numero10); 

/* 
Ejercicio 9: Comparación entre booleanos
Declara dos variables con valores booleanos (true y false). Verifica si son iguales utilizando ===.
*/
let esverdadero = true;
let esfalso = false;
alert(esverdadero === esfalso);
console.log(esverdadero === esfalso);