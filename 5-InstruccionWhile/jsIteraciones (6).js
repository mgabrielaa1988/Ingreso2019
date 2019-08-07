function mostrar() {
	/**Enunciado:
	Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio. */

	var numero;
	var contador = 0;
	var acumulador = 0;
	var promedio;

	while (contador < 5) {
		numero = prompt("Ingrese los numeros: ");
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