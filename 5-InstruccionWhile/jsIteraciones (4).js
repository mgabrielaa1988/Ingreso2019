function mostrar() {

	var numero = prompt("Ingrese un número entre 0 y 10");
	numero = parseInt(numero);

	while (isNaN(numero)) {
		numero = prompt("Error...\nReingrese solo numeros");
	}

	while (numero < 0 || numero > 10) {
		numero = prompt("Error...\nReingrese un número solo entre 0 y 10");
	}

	document.getElementById("Numero").value = numero;

}//FIN DE LA FUNCIÓN