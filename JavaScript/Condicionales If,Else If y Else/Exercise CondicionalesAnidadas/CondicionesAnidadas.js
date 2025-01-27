//* Condicionales anidadas
let edad = 18;
let LicenciaConducion = true;

if (edad >= 18) {
    console.log('Eres mayor de edad');
    if (LicenciaConducion) {
        console.log('Puedes conducir');
    } else {
        console.log('No puedes conducir')
    }
} else {
    console.log('Eres menor de edad');
}

//* Con la clausula de guarda
if (edad < 18) return console.log('Eres menor de edad');
if (!LicenciaConducion) return console.log('No tienes licencia');
console.log('Puedes conducir');

//* Con Condicionales Anidadas
let phone = true;
let brand = 'Apple';
let model = 'Iphone';
let version = '14';

if (phone) {
    if (brand === 'Apple') {
        if (model === 'Iphone') {
            if (version === '14') {
                console.log('Es el ultimo Iphone hasta la fecha');
            } else {
                console.log('No es el ultimo Iphone hasta la fecha');
            }
        } else {
            console.log('El telefono no es modelo Iphone');
        }
    } else {
        console.log('No es marca Apple');
    }
} else {
    console.log('No es un Iphone');
} 

//* Condicionales con clausula de guarda
if (!phone) return console.log('No es un Iphone');
if (brand !== 'Apple') return console.log('No es marca Apple');
if (model !== 'Iphone') return console.log('El telefono no es modelo Iphone'); 
if (version !== '14') return console.log('No es el ultimo Iphone hasta la fecha');
console.log('Es el ultimo Iphone hasta la fecha');