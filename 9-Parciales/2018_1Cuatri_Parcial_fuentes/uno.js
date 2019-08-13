
function mostrar() {
    /**Enunciado:
    Bienvenidos. 
    Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt y 
    que muestre el perímetro por alert. */

    var ancho = prompt("Ingrese el ancho del rectangulo:");
    ancho = parseInt(ancho);
    while (isNaN(ancho) || ancho < 1) {
        ancho = prompt("ERROR...\nIngrese solo numeros positivos:");
        ancho = parseInt(ancho);
    }

    var largo = prompt("Ingrese el ancho del rectangulo:");
    largo = parseInt(largo);
    while (isNaN(largo) || largo < 1) {
        largo = prompt("ERROR...\nIngrese solo numeros positivos:");
        largo = parseInt(largo);
    }

    var perimetro = 2 * ancho + 2 * largo;

    alert("Ancho: " + ancho + "\nLargo: " + largo + "\nEl perimetro del rectangulo es: " + perimetro);

}
