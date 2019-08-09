/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto;
var contadorIntentos = 0;
var mensaje;
document.getElementById("intentos").value = contadorIntentos;

function comenzar() {
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.floor(Math.random() * (101 - 1)) + 1;
	contadorIntentos = 0;
	document.getElementById("intentos").value = contadorIntentos;
	alert(numeroSecreto);
}

function verificar() {
	var numeroUsuario = document.getElementById("numero").value;
	contadorIntentos++;
	document.getElementById("intentos").value = contadorIntentos;
	if (numeroUsuario == numeroSecreto) {
		mensaje = "Usted es un ganador!!! y en solo " + contadorIntentos + " intentos";
		switch (contadorIntentos) {
			case 1: {
				mensaje = mensaje + "\nUsted es un Psiquico";
				break;
			}
			case 2: {
				mensaje = mensaje + "\nExcelente percepción";
				break;
			}
			case 3: {
				mensaje = mensaje + "\nEsto es suerte";
				break;
			}
			case 4: {
				mensaje = mensaje + "\nExcelente técnica";
				break;
			}
			case 5: {
				mensaje = mensaje + "\nUsted está en la media";
				break;
			}
			case 6:
			case 7:
			case 8:
			case 9:
			case 10: {
				mensaje = mensaje + "\nFalta técnica";
				break;
			}
			default: {
				mensaje = mensaje + "\nAfortunado en el amor!!";
				break;
			}
		}
	}
	else if (numeroUsuario < numeroSecreto) {
		mensaje = "Falta...";
	}
	else {
		mensaje = "Se paso...";
	}
	alert(mensaje);
}