function mostrar() {

    var clave = prompt("Ingrese el número clave");
    clave=clave.toLowerCase();

    while (clave != "utn750") {
        clave = prompt("Error...\nReingrese el número clave");
        clave=clave.toLowerCase();
    }

}//FIN DE LA FUNCIÓN
