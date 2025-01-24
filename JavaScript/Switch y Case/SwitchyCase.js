let numero1 = Number(prompt("Ingrese el primer numero: ", 10));
let numero2 = Number(prompt("Ingrese un segundo numero: ", 10));
let resultado = 0;
let opcion = Number(prompt("Ingrese una de las siguientes opciones entre (1,4)"));

switch (opcion) {
    case 1:
        resultado = numero1 + numero2;
        alert(`El resultado de la suma es: ${resultado}`);
        break;
    case 2:
        resultado = numero1 - numero2;
        alert(`El resultado de la resta es: ${resultado}`);
        break;
    case 3:
        resultado = numero1 * numero2;
        alert(`El resultado de la multiplicacion es: ${resultado}`);
        break;
    case 4:
        resultado = (numero2 === 0) 
        ? alert("No se puede dividir entre cero. Intente de nuevo con otro número.")
        : (numero1 === 0) 
            ? alert("El resultado de dividir 0 entre cualquier número distinto de 0 es 0.")
            : alert(`El resultado de la división es: ${numero1 / numero2}`);
        break;
    default:
        alert(`opcion ingreseda no valida`);
        break;
}


