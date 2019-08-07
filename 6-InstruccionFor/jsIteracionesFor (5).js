function mostrar() {
    var numero;
    for (; ;) {
        numero = prompt("Ingrese un numero:");
        numero = parseInt(numero);
        if (numero == 9) {
            alert("Ingreso 9 => BREAK");
            break;
        }
    }


}//FIN DE LA FUNCIÓN