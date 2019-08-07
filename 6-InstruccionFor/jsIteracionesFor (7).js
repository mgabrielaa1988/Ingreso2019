function mostrar() {
    /**Enunciado:
    al presionar el botón pedir un número. 
    mostrar los numeros divisores desde el 1 al número ingresado, 
    y mostrar la cantidad de numeros divisores encontrados. */

    var cantidadDiv = 0;
    var numero = prompt("Ingrese un numero:");
    numero = parseInt(numero);
    while (isNaN(numero)) {
        numero = prompt("Ingrese solo numeros:");
        numero = parseInt(numero);
    }
    document.write("<br>Numero ingresado => " + numero);
    for (var index = 1; index <= numero; index++) {
        if (numero % index == 0) {
            //alert("Divisores de " + numero + ": " + index);
            document.write("<br>Divisores => " + index);
            cantidadDiv++;
        }
    }
    document.write("<br>Cantidad de divisores => " + cantidadDiv);

}//FIN DE LA FUNCIÓN