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

let saldo = 500;
let tarjetaCredito = true;
let cuponDescuento = false;
let usuarioBloqueado = false;

let validacionCompra = (saldo >= 500 && (tarjetaCredito || cuponDescuento) && !usuarioBloqueado)
                    ? `Usted puede realizar una compra en linea`
                    : `Usted no puede realizar una compra en linea`;
console.log(validacionCompra);

let suscripcionActiva = false;
let tarifaUnica = false;
let libroDisponible = true;
let usuarioBlo = false;

let acceso = ((suscripcionActiva || tarifaUnica) && libroDisponible && !usuarioBlo)
            ? `Si puede acceder a un libro en la biblioteca digital`
            : `No puede acceder a un liro en la biblioteca digital`;
console.log(acceso);

let inicioSeccion = true;
let usuarioVerificado = true;
let activaSuscripcion = true;
let cuotasPagadas = false;

let plataformaLinea = ((activaSuscripcion || cuotasPagadas) && inicioSeccion && usuarioVerificado)
                    ? `Puedes acceder a la plataforma en linea`
                    : `No puedes acceder a la plataforma en linea`;
console.log(plataformaLinea);

let saldoCuenta = true;
let producto = false;
let direccionValida = true;

let verificacionTienda = (saldoCuenta && producto && direccionValida)
                    ? `El cliente puede cliente puede comprar en la tienda`
                    : `El cliente no puede comprar en la tieda`;
console.log(verificacionTienda);


let usuario = prompt("Ingrese su nombre: ", "keiner");
let correo = prompt("Ingrese su correo electronico: ", "keiner@gmail.com");
let usuarioRegistrado = 
prompt(`El usuario con nombre: ${usuario} y con correo: ${correo} esta registrado (si/no)`).toLowerCase() === "si";
let correoConfirmado = prompt("Este es su correo electronico: " + correo + "(si/no)").toLowerCase() === "si";
let miembroPremium = prompt("Eres un miebro Premium (si/no): ", "si").toLowerCase() === "si";
let invitacionEspecial = prompt("Tienes una invitacion especial (si/no): ", "si").toLowerCase() === "no";

let areExclusiva = (usuarioRegistrado && correoConfirmado  && (miembroPremium || invitacionEspecial))
                ? alert(`El usuario: ${usuario} con correo: ${correo} puede acceder a la area exclusiva`)
                : alert(`El usuario: ${usuario} con correo: ${correo} no puede acceder a la area exclusiva`);
alert(areExclusiva);