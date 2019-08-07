function mostrar() {
    //tomo la edad  
    var edad = document.getElementById("edad").value;
    edad = parseInt(edad);
    if (edad > 12 && edad < 18) {
        alert("Adolescente");
    }


}//FIN DE LA FUNCIÓN