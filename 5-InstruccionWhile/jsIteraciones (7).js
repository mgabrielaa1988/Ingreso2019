function mostrar() {
	/**Enunciado:
	Al presionar el botón pedir números hasta que el USUARIO QUIERA e informar la suma acumulada y el promedio. */

	var numero;
	var contador = 0;
	var acumulador = 0;
	var promedio;

	numero = prompt("Ingrese el numero: ");
	numero = parseInt(numero);
	while (isNaN(numero)) {
		numero = prompt("Ingrese solo numeros: ");
		numero = parseInt(numero);
	}
	acumulador = acumulador + numero;
	contador++;
	
	while (confirm("Desea ingresar otro numero?")) {
		numero = prompt("Ingrese el numero: ");
		numero = parseInt(numero);
		while (isNaN(numero)) {
			numero = prompt("Ingrese solo numeros: ");
			numero = parseInt(numero);
		}
		acumulador = acumulador + numero;
		contador++;
	}
	promedio = acumulador / contador;

	document.getElementById("suma").value = acumulador;
	document.getElementById("promedio").value = promedio;

}//FIN DE LA FUNCIÓN