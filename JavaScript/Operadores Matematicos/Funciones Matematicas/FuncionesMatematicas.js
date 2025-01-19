/* /* Redondea x al entero más cercano */
let numero1 = parseFloat(prompt("Ingrese un numero:"));
let redondearRound = Math.round(numero1);
alert(`El resultado del redondeo es: ${redondearRound}`);


/* Redondea x hacia arriba (al entero más grande). */
let numero2 = parseFloat(prompt("Ingrese un segundo numero:"));
let redondearCeil = Math.ceil(numero2);
alert(`El resultado del redondeo es: ${redondearCeil}`);

/* Redondea x hacia abajo (al entero más pequeño). */
let numero3 = parseFloat(prompt("Ingrese un tercer numero:"));
let redondearFloor = Math.floor(numero3);
alert(`El resultado del redondeo es: ${redondearFloor}`);

/* Devuelve la parte entera de x, eliminando los decimales. */
let numero4 = parseFloat(prompt("Ingrese un cuarto numero:"));
let redondearTrunc = Math.trunc(numero4);
alert(`El resultado del redondeo es: ${redondearTrunc}`)

/*Math.PI: Valor de π (≈ 3.14159). */
let numero5 = Math.PI;
alert(`El numero es: ${numero5}`);

/*Math.sqrt(x): Devuelve la raíz cuadrada de x. */
let numero6 = parseInt(prompt("Ingrese el sexto numero:"));
let raiz = Math.sqrt(numero6);
alert(`La raiz cuadrado del numero es: ${raiz}`);

/* Math.pow(base, exponente): Eleva la base al exponente */
let radio = Number(prompt("Ingrese el radio del circulo:"));
let areaCirculo = Math.PI * Math.pow(radio,2);
alert(`El area del circulo es: ${areaCirculo}`);

/*Math.sin(x): Devuelve el seno de x (en radianes). */
let numero7 = Number(prompt("Ingrese el numero septimo:"));
let seno = Math.sin(numero7);
alert(`El seno del numero: ${numero7} es ${seno}`);