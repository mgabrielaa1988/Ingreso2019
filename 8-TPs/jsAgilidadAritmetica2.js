/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */

var respuesta;
var resultado;
var temporizador;

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
    temporizador = setTimeout(Responder, 5000);
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
