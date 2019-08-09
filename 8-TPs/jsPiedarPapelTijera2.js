var eleccionMaquina;
var ContadorDeEmpates = 0;
var ContadorDeGanadas = 0;
var ContadorDePerdidas = 0;

function comenzar() {
	//Genero el número RANDOM entre 1 y 3
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
		ContadorDeEmpates++;
	}
	else if (eleccionMaquina == 2) {
		alert("Perdio");
		ContadorDePerdidas++;
	}
	else {
		alert("Gano");
		ContadorDeGanadas++;
	}
	mostrarResultado();
}//FIN DE LA FUNCIÓN

function papel() {
	if (eleccionMaquina == 1) {
		alert("Gano");
		ContadorDeGanadas++;
	}
	else if (eleccionMaquina == 2) {
		alert("Empate");
		ContadorDeEmpates++;
	}
	else {
		alert("Perdio");
		ContadorDePerdidas++;
	}
	mostrarResultado();
}//FIN DE LA FUNCIÓN

function tijera() {
	if (eleccionMaquina == 1) {
		alert("Perdio");
		ContadorDePerdidas++;
	}
	else if (eleccionMaquina == 2) {
		alert("Gano");
		ContadorDeGanadas++;
	}
	else {
		alert("Empate");
		ContadorDeEmpates++;
	}
	mostrarResultado();
}//FIN DE LA FUNCIÓN

function mostrarResultado() {
	document.getElementById("ganadas").value = ContadorDeGanadas + " Juegos Ganados";
	document.getElementById("perdidas").value = ContadorDePerdidas + " Juegos Perdidos";
	document.getElementById("empatadas").value = ContadorDeEmpates + " Juegos Empatados";
}