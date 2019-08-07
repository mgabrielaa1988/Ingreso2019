function mostrar() {
	/**Enunciado:
Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos. 			2-Suma de los positivos. 
3-Cantidad de positivos. 			4-Cantidad de negativos. 
5-Cantidad de ceros. 				6-Cantidad de números pares. 
7-Promedio de positivos. 			8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos). */

	var sumaNeg = 0;
	var sumaPos = 0;
	var cantPositiv = 0;
	var cantNegativ = 0;
	var cantCeros = 0;
	var cantPares = 0;
	var promPositiv;
	var promNegativ;
	var diferencia;

	var numero = prompt("Ingrese un numero:");
	numero = parseInt(numero);
	while (isNaN(numero)) {
		numero = prompt("Ingrese solo numeros:");
		numero = parseInt(numero);
	}
	if (numero < 0) {
		sumaNeg = sumaNeg + numero;
		cantNegativ++;
	}
	else if (numero > 0) {
		sumaPos = sumaPos + numero;
		cantPositiv++;
	}
	else {
		cantCeros++;
	}
	if (numero % 2 == 0 && numero != 0) {
		cantPares++;
	}


	while (confirm("Desea ingresar otro numero?")) {
		numero = prompt("Ingrese un numero:");
		numero = parseInt(numero);
		while (isNaN(numero)) {
			numero = prompt("Ingrese solo numeros:");
			numero = parseInt(numero);
		}
		if (numero < 0) {
			sumaNeg = sumaNeg + numero;
			cantNegativ++;
		}
		else if (numero > 0) {
			sumaPos = sumaPos + numero;
			cantPositiv++;
		}
		else {
			cantCeros++;
		}
		if (numero % 2 == 0 && numero != 0) {
			cantPares++;
		}
	}

	promPositiv = sumaPos / cantPositiv;
	promNegativ = sumaNeg / cantNegativ;
	diferencia = sumaPos + sumaNeg;

	document.write("<br>1-Suma de los negativos." + sumaNeg);
	document.write("<br>2-Suma de los positivos." + sumaPos);
	document.write("<br>3-Cantidad de positivos." + cantPositiv);
	document.write("<br>4-Cantidad de negativos." + cantNegativ);
	document.write("<br>5-Cantidad de ceros." + cantCeros);
	document.write("<br>6-Cantidad de números pares." + cantPares);
	document.write("<br>7-Promedio de positivos." + promPositiv);
	document.write("<br>8-Promedios de negativos." + promNegativ);
	document.write("<br>9-Diferencia positivos - negativos." + diferencia);

}//FIN DE LA FUNCIÓN