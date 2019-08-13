function mostrar() {
    /**Enunciado:
    Bienvenidos. 
    Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id. */

    var precio = prompt("Ingrese el precio: ");
    precio = parseInt(precio);
    while (isNaN(precio) || precio < 1) {
        precio = prompt("ERRROR... Solo se permiten numeros positivos\nReingrese el precio: ");
        precio = parseInt(precio);
    }

    var descuento = prompt("Ingrese el porcentaje de decuento: ");
    descuento = parseInt(descuento);
    while (isNaN(descuento) || descuento < 1 || descuento > 100) {
        descuento = prompt("ERRROR... Solo se permiten numeros positivos\nReingrese el precio: ");
        descuento = parseInt(descuento);
    }

    document.getElementById("elPrecioFinal").value = (100 - descuento) * precio / 100;

}
