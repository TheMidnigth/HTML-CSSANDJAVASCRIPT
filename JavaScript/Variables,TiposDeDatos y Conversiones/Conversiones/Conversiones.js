//*Conversiones de letras a numeros con Number(), parseInt() o parseFloat().

//*De letras a numeros
let telefono = '123451414';
console.log(Number(telefono));

//* No es un número válido 123abc
let numerosyLetras = '123abc';
console.log(Number(numerosyLetras));

//*De decimal de letras a entero 
let entero = '123.53';
console.log(parseInt(entero));

//*De decimal de letras a decimal normal
let decimales = '123.43';
console.log(parseFloat(decimales));

//* De Verdadero a numero
let verdadero = true;
console.log(Number(verdadero));

//* De falso a numero
let falso = false;
console.log(Number(falso));

//* De null a numero
let vacio = null;
console.log(Number(vacio));

//* De undefined a numero
let valor;
console.log(Number(valor));

//*Conversiones de cualquier numero a cadena con String() o toString().

//*De numero a cadena
let numeroString = 123;
console.log(String(numeroString)); 

//*De true a cadena
let isverdadero = true;
console.log(String(isverdadero));

//*De falso a cadena
let isfalso = false;
console.log(String(isfalso));

//*De null a cadena
let precio = null;
console.log(String(precio));

//*De undefined a cadena
let indefinido;
console.log(String(indefinido));

//* Con toSring()
let num = 50;
console.log(num.toString());

//* Conversiones a false
console.log(Boolean(0));  
console.log(Boolean("")); 
console.log(Boolean(null)); 
console.log(Boolean(undefined));
console.log(Boolean(NaN));

//* Conversiones a true
console.log(Boolean(1));    
console.log(Boolean(-10));  
console.log(Boolean("Hola"));
console.log(Boolean([]));  
console.log(Boolean({}));

//* Conversión a Objeto
console.log(Object(123));
console.log(Object("Hola"));
console.log(Object(true)); 
console.log(Object(null));
console.log(Object(undefined)); 
