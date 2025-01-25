/* Días de la semana: Crea un programa que, dado un número del 1 al 7, devuelva el nombre del día correspondiente (por ejemplo, 1 = Lunes). */
let diaSemana = 6;
switch (diaSemana) {
    case 1:
        console.log('lunes');
        break;
    case 2:
        console.log('martes');
        break;
    case 3:
        console.log('miercoles');
        break;
    case 4:
        console.log('jueves');
        break;
    case 4:
        console.log('viernes');
        break;
    case 5:
    case 6:
        console.log('fin de semana');
        break;
    default:
        console.log('numero de la semana incorrecto');
        break;
}

/* Meses del año: Diseña un programa que, dado un número del 1 al 12, devuelva el nombre del mes correspondiente. */
let mesesAño = 2;
switch (mesesAño) {
    case 1:
        console.log('ENERO');
        break;
    case 2:
        console.log('FEBRERO');
        break;
    case 3:
        console.log('MARZO');
        break;
    case 4:
        console.log('ABRIL');
        break;
    case 5:
        console.log('MAYO');
        break;
    case 6:
        console.log('JUNIO');
        break;
    case 7:
        console.log('JULIO');
        break;
    case 8:
        console.log('AGOSTO');
        break;
    case 9:
        console.log('SEPTIEMBRE');
        break;
    case 10:
        console.log('OCTUBRE');
        break;
    case 11:
        console.log('NOVIEMBRE');
        break;
    case 12:
        console.log('DICIEMBRE');
        break;
    default:
        console.log('Ese mes del año no existe');
        break;
}

/* Clasificación de notas: Escribe un programa que reciba una calificación (A, B, C, D, F) y devuelva un mensaje explicando el significado de la calificación. */
let calificación = 'A'.toLowerCase();
switch (calificación) {
    case 'a':
        console.log('Sacaste la nota maxima felicidades');
        break;
    case 'b':
        console.log('Sacaste una buena nota pero puede ser mejor');
        break;
    case 'c':
        console.log('Sacaste una nota decente sigue mejorando');
        break;
    case 'd':
        console.log('Sacaste una nota mala ponte a estudiar mas');
        break;
    case 'f':
        console.log('Sacaste la peor nota tienes que estudiar mas');
        break;
    default:
        console.log('esa nota no existe');
        break;
}

/* Clasificación de edades: Escribe un programa que reciba la edad de una persona y devuelva su clasificación (niño, adolescente, adulto, adulto mayor). */
let edad = 90;
switch (true) {
    case (edad > 1 && edad <= 5):
        console.log('Es un bebe');
        break;
    case (edad >= 6 && edad <= 13):
        console.log('Es un niño');
        break;
    case (edad >= 14 && edad <= 17):
        console.log('Es un adolescente');
        break;
    case (edad >= 18 && edad <= 25):
        console.log('Es un adulto joven');
        break;
    case (edad >= 26 && edad <= 59):
        console.log('Es un adulto');
        break;
    case (edad >= 60):
        console.log('Es un adulto mayor');
        break;
    default:
        console.log('Esa no es edad valida')
        break;
}

/* Identificación de figura geométrica: Escribe un programa que, dado un número de lados (3, 4, 5, etc.), identifique la figura geométrica correspondiente (triángulo, cuadrado, pentágono, etc.). */
let numeroLados = 9;
switch (numeroLados) {
    case 3:
        console.log('Esto es un triangulo');
        break;
    case 4:
        console.log('Esto es un cuadrado');
        break;
    case 5:
        console.log('Esto es un pentagono');
        break;
    case 6:
        console.log('Esto es un hexagono');
        break;
    case 7:
        console.log('Esto es un heptagono');
        break;
    case 8:
        console.log('Esto es un octagono');
        break;
    case 10:
        console.log('Esto es un decagono');
        break;
    default:
        console.log('Ese numero de lados no existe en una figura geometrica');
        break;
}

//* Creamos un prompt que pida la categoria
let categoria = parseInt(prompt(
    `Selecione una categoria
    1. Tecnologia
    2. Ropa
    3. Comida`
));

//* Creamos tres variables producto,precio y nombre del producto
let producto = 0;
let precio = 0;
let nombreProducto = "";

//* Creamos el switch con casos
switch (categoria) {
    case 1:
        producto = parseInt(prompt(
        `Seleccione un producto de tecnologia
        1. Laptop ($800)
        2. Tablet $(400)
        3. Smartphone ($600)`
        ));
        switch (producto) {
            case 1:
                precio = 800;
                nombreProducto = "Laptop";
                break;
            case 2:
                precio = 900;
                nombreProducto = "Tablet";
                break;
            case 3:
                precio = 600;
                nombreProducto = "Smartphone";
                break;
            default:
                alert(`El producto que eligio no existe eliga uno que exista`);
                break;
        }
        break;
    case 2:
        producto = parseInt(prompt(
            `Seleccione un producto de ropa
            1. Camiseta ($20)
            2. Pantalón ($40)
            3. Chaqueta ($60)`
            ));
            switch (producto) {
                case 1:
                    precio = 20;
                    nombreProducto = "Camiseta";
                    break;
                case 2:
                    precio = 40;
                    nombreProducto = "Pantalón";
                    break;
                case 3:
                    precio = 60;
                    nombreProducto = "Chaqueta";
                    break;
                default:
                    alert(`El producto que eligio no existe eliga uno que exista`);
                    break;
            }
        break;
    case 3:
        producto = parseInt(prompt(
            `Seleccione un producto de comida
            1. Pizza ($15)
            2. Hamburguesa ($10)
            3. Ensalada ($8)`
            ));
            switch (producto) {
                case 1:
                    precio = 15;
                    nombreProducto = "Pizza";
                    break;
                case 2:
                    precio = 10;
                    nombreProducto = "Hamburguesa";
                    break;
                case 3:
                    precio = 600;
                    nombreProducto = "Ensalada";
                    break;
                default:
                    alert(`El producto que eligio no existe eliga uno que exista`);
                    break;
            }
        break;
    default:
        alert(`Esta categoria: ${categoria} no existe ingrese una valida`);
        break;
}

