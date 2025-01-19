let numero1 = parseInt(prompt("Ingrese el primer numero: ",22));
let numero2 = parseInt(prompt("Ingrese el segundo numero: ",11));
let numero3 = parseInt(prompt("Ingrese el tercer numero: ",15));
let numero4 = parseFloat(prompt("Ingrese un numero decimal: ",4.8));

let suma = numero1 + numero2;
alert("El resultado de la suma es: " + suma);

let resta = numero1 + numero2;
alert("El resultado de la resta es: " + resta);

let multiplicacion = numero1 * numero2;
alert("El resultado de la multiplicacion es: " + multiplicacion);

let division = numero1 / numero2;
alert("El resultado de lad division es: " + division);

let residuo = numero1 % numero2;
alert("El resultado del residuo es: " + residuo);

let potencia = numero1 ** numero2;
alert("El resultado de la potencia es: " + potencia);

let promedio = (numero1 + numero2 + numero3)/3;
alert("El resultado del promedio es: " + promedio) 

let redondear = Math.round(numero4);
alert("El numero redondeado es: " + redondear);