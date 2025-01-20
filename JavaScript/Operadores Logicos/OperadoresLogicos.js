let edad = 19;
let miembro = true;
let invitacionValida = true;

let zonaRestringida = (edad >= 18 && miembro && invitacionValida)
    ? `Tiene acceso a la zona restringida`
    : `No tiene acceso a la zona restringida`
console.log(zonaRestringida);

let nombre = "keiner";
let contraseña = "12345678";
let age = 16;

let autenticacion = (nombre.trim() !== "" && contraseña.length >= 8 && age >= 18)
    ? `El usuario con nombre: ${nombre} y con edad: ${age} puede iniciar seccion`
    : `El usuario con nombre: ${nombre} y con edad: ${age} no puede iniciar seccion`;
console.log(autenticacion);

let year = 18;
let calificacion = 70;
let disponibilidad = true;

let inscribir = (year >= 18 && calificacion >= 70 && disponibilidad)
    ? `El estudiante se puede inscribir a la universidad`
    : `El estudiante no puede inscribirse a la universidad`;
console.log(inscribir);