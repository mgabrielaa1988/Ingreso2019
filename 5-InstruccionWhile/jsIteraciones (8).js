function mostrar() {
	/**Enunciado:
	Al presionar el botón pedir números hasta que el usuario quiera, 
	sumar los que son positivos y multiplicar los negativos. */

	var numero;
	var sumaPositivos = 0;
	var prodNegativos = 1;

	numero = prompt("Ingrese el numero: ");
	numero = parseInt(numero);
	while (isNaN(numero)) {
		numero = prompt("Ingrese solo numeros: ");
		numero = parseInt(numero);
	}
	if (numero >= 0) {
		sumaPositivos = sumaPositivos + numero;
	}
	else {
		prodNegativos = prodNegativos * numero;
	}

	while (confirm("Desea ingresar otro numero?")) {
		numero = prompt("Ingrese el numero: ");
		numero = parseInt(numero);
		while (isNaN(numero)) {
			numero = prompt("Ingrese solo numeros: ");
			numero = parseInt(numero);
		}
		if (numero >= 0) {
			sumaPositivos = sumaPositivos + numero;
		}
		else {
			prodNegativos = prodNegativos * numero;
		}
	}

	document.getElementById("suma").value = sumaPositivos;
	document.getElementById("producto").value = prodNegativos;

}//FIN DE LA FUNCIÓN