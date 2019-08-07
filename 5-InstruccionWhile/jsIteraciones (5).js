function mostrar() {

    var sexo = prompt("Ingrese f ó m");
    sexo = sexo.toLowerCase();

    while (sexo != "f" && sexo != "m") {
        sexo = prompt("Error...\nReingrese solo f ó m");
        sexo = sexo.toLowerCase();
    }

    document.getElementById("Sexo").value = sexo;

}//FIN DE LA FUNCIÓN