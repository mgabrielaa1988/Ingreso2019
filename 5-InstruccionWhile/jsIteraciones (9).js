function mostrar() {
	/**Enunciado:
Al presionar el botón pedir números hasta que el usuario quiera, 
mostrar el número máximo y el número mínimo ingresado. */

	var numero;
	var minimo;
	var maximo;
	var flag = true;

	numero = prompt("Ingrese el numero: ");
	numero = parseInt(numero);
	while (isNaN(numero)) {
		numero = prompt("Ingrese solo numeros: ");
		numero = parseInt(numero);
	}
	if (flag) {
		minimo = numero;
		maximo = numero;
	}

	while (confirm("Desea ingresar otro numero?")) {
		numero = prompt("Ingrese el numero: ");
		numero = parseInt(numero);
		while (isNaN(numero)) {
			numero = prompt("Ingrese solo numeros: ");
			numero = parseInt(numero);
		}
		if (numero < minimo) {
			minimo = numero;
		}
		else if (numero > maximo) {
			maximo = numero;
		}
	}

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;

}//FIN DE LA FUNCIÓN