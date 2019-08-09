/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/

var respuesta;
var resultado;

function comenzar() {
    var num1 = Math.floor(Math.random() * (11 - 1)) + 1;
    var num2 = Math.floor(Math.random() * (11 - 1)) + 1;
    var operacion = Math.floor(Math.random() * (5 - 1)) + 1;
    var operador;
    switch (operacion) {
        case 1: {
            resultado = num1 + num2;
            operador = "+";
            break;
        }
        case 2: {
            resultado = num1 - num2;
            operador = "-";
            break;
        }
        case 3: {
            operador = "/";
            if (num2 == 0) {
                resultado = 0;
            }
            else {
                resultado = num1 / num2;
            }
            break;
        }
        case 4: {
            resultado = num1 * num2;
            operador = "*";
            break;
        }
    }
    document.getElementById("PrimerNumero").value = num1;
    document.getElementById("Operador").value = operador;
    document.getElementById("SegundoNumero").value = num2;
}//FIN DE LA FUNCIÓN
function Responder() {
    respuesta = document.getElementById("Respuesta").value;
    if (respuesta == resultado) {
        alert("Respuesta correcta!");
    }
    else {
        alert("Respuesta incorrecta...");
    }
}//FIN DE LA FUNCIÓN
