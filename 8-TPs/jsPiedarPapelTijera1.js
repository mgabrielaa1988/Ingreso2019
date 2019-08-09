/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar() {
    eleccionMaquina = Math.floor(Math.random() * (4 - 1)) + 1;
    switch (eleccionMaquina) {
        case 1: {
            alert("Piedra");
            break;
        }
        case 2: {
            alert("Papel");
            break;
        }
        case 3: {
            alert("Tijera");
            break;
        }
    }
}//FIN DE LA FUNCIÓN
function piedra() {
    if (eleccionMaquina == 1) {
        alert("Empate");
    }
    else if (eleccionMaquina == 2) {
        alert("Perdio");
    }
    else {
        alert("Gano");
    }
}//FIN DE LA FUNCIÓN
function papel() {
    if (eleccionMaquina == 1) {
        alert("Gano");
    }
    else if (eleccionMaquina == 2) {
        alert("Empate");
    }
    else {
        alert("Perdio");
    }
}//FIN DE LA FUNCIÓN
function tijera() {
    if (eleccionMaquina == 1) {
        alert("Perdio");
    }
    else if (eleccionMaquina == 2) {
        alert("Gano");
    }
    else {
        alert("Empate");
    }
}//FIN DE LA FUNCIÓN