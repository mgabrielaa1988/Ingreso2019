/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
    var importe = document.getElementById("importe").value;
    importe = parseInt(importe);
    var resultado = parseInt(importe * 0.75);
    document.getElementById("resultado").value = resultado;
}
