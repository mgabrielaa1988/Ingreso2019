function mostrar() {
    /**Enunciado:
    al presionar el botón pedir un número. 
    mostrar los numeros pares desde el 1 al número ingresado, 
    y mostrar la cantidad de numeros pares encontrados. */

    var cantidadPares = 0;
    var numero = prompt("Ingrese un numero:");
    numero = parseInt(numero);
    while (isNaN(numero)) {
        numero = prompt("Ingrese solo numeros:");
        numero = parseInt(numero);
    }
    for (var index = 1; index <= numero; index++) {
        if (index % 2 == 0) {
            //alert("Numero par: " + index);
            document.write("<br>Numeros pares => " + index);
            cantidadPares++;
        }
    }
    document.write("<br>Cantidad de pares => " + cantidadPares);


}//FIN DE LA FUNCIÓN