function mostrar() {
    //tomo la edad  
    var edad = document.getElementById("edad").value;
    edad = parseInt(edad);
    var estCivil = document.getElementById("estadoCivil").value;
    if (edad < 18 && estCivil != "Soltero") {
        alert("Es muy pequeño para NO ser soltero.");
    }

}//FIN DE LA FUNCIÓN