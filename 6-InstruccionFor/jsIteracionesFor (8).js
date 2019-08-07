function mostrar() {

    /**Enunciado:
    al presionar el botón pedir un número. Informar si el numero es PRIMO o no. */

    var primo = true;
    var numero = prompt("Ingrese un numero:");
    numero = parseInt(numero);
    while (isNaN(numero)) {
        numero = prompt("Ingrese solo numeros:");
        numero = parseInt(numero);
    }
    for (var i = 2; i < numero; i++) {
        if (numero % i == 0) {
            primo = false;
            break;
        }
    }
    document.write("<br>Numero ingresado => " + numero);
    if (primo) {
        document.write(" => Es primo");
    }
    else {
        document.write(" => No es primo");
    }

}//FIN DE LA FUNCIÓN