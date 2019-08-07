function mostrar() {
	//Genero el número RANDOM entre 1 y 10 
	var nota = Math.floor(Math.random() * (11 - 1)) + 1;
	if (nota >= 9) {
		alert(nota + " EXCELENTE");
	}
	else if (nota >= 4) {
		alert(nota + " APROBÓ");
	}
	else {
		alert(nota + " Vamos, la proxima se puede");
	}

}//FIN DE LA FUNCIÓN