function mostrar() {
    /**Enunciado:
    Bienvenidos. 
    mostrar por alert el mensaje "usted es xxxxx y vive en la localidad de xxxxxxxx". */

    var nombre = document.getElementById("elNombre").value;
    var localidad = document.getElementById("laLocalidad").value;

    alert("Usted es " + nombre + " y vive en la localidad de " + localidad + ".");

}
