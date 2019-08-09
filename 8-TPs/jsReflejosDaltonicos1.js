/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var ColorSecreto;
var color;
var tiempoInicio;
var tiempoFinal;
function comenzar() {
    ColorSecreto = Math.floor(Math.random() * (7 - 1)) + 1;
    switch (ColorSecreto) {
        case 1: {
            document.getElementById("ColorElejido").value = "AZUL";
            color = "azul";
            break;
        }
        case 2: {
            document.getElementById("ColorElejido").value = "AMARILLO";
            color = "amarillo";
            break;
        }
        case 3: {
            document.getElementById("ColorElejido").value = "MARRON";
            color = "marron";
            break;
        }
        case 4: {
            document.getElementById("ColorElejido").value = "VERDE";
            color = "verde";
            break;
        }
        case 5: {
            document.getElementById("ColorElejido").value = "CELESTE";
            color = "celeste";
            break;
        }
        case 6: {
            document.getElementById("ColorElejido").value = "ROJO";
            color = "rojo";
            break;
        }
    }
    tiempoInicio = new Date();
    tiempoInicio = tiempoInicio.getTime();
}//FIN DE LA FUNCIÓN
function Responder(colorParametro) {
    var colorSel = colorParametro;
    var segundos;
    if (color == colorParametro) {
        tiempoFinal = new Date();
        tiempoFinal = tiempoFinal.getTime();
        segundos = (tiempoFinal - tiempoInicio) / 1000;
        alert("Tiempo: " + segundos + " segundos.");
    }
}//FIN DE LA FUNCIÓN
