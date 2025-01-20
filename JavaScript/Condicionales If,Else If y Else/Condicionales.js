//* condicionales normales
let age = 18;
if (age >= 18) {
    console.log(`usted es mayor de edad`);
} else {
    console.log(`usted es menor de edad`);
}

//* condicionales ternarias
let edad = 18;
let result = (edad >= 18) ? 'usted es mayor de edad' : 'usted es menor de edad';
console.log(result);

let nota = 40;
let calificacion = (nota >= 90) ? 'Obtuvo la calificacion maxima A':
    (nota >= 80 && nota <= 89) ? 'Obtuvo la calificacion B':
    (nota >= 70 && nota <= 79) ? 'Obtuvo la calificaion de C':
    (nota >= 60 && nota <= 69) ? 'Obtuvo la calificacion de D':
    (nota < 60) ? 'Obtuvo la calificacion F':
    '';
console.log(calificacion);

let mayorEdad = 16;
let isLicencia = true;
let Conducir = (mayorEdad >= 18 || isLicencia) 
    ? 'puede conducir un carro'
    :'no puedes conducir un carro';
console.log(Conducir);