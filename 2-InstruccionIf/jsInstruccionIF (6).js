function mostrar() {
    //tomo la edad  
    var edad = document.getElementById("edad").value;
    edad = parseInt(edad);
    if (edad > 0 && edad < 13) {
        alert("Niño");
    }
    else if (edad < 18) {
        alert("Adolescente");
    }
    else {
        alert("Adulto");
    }


}//FIN DE LA FUNCIÓN