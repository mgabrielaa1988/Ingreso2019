/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var precio1;
var precio2;
var precio3;
var resultado;

function Sumar() {
    precio1 = document.getElementById("PrecioUno").value;
    precio1 = parseInt(precio1);
    precio2 = document.getElementById("PrecioDos").value;
    precio2 = parseInt(precio2);
    precio3 = document.getElementById("PrecioTres").value;
    precio3 = parseInt(precio3);
    resultado = precio1 + precio2 + precio3;
    alert("El resultado de la SUMA es:\n" + precio1 + " + " + precio2 + " + " + precio3 + " = " + resultado);
}
function Promedio() {
    precio1 = document.getElementById("PrecioUno").value;
    precio1 = parseInt(precio1);
    precio2 = document.getElementById("PrecioDos").value;
    precio2 = parseInt(precio2);
    precio3 = document.getElementById("PrecioTres").value;
    precio3 = parseInt(precio3);
    resultado = (precio1 + precio2 + precio3) / 3;
    alert("El resultado del PROMEDIO es: " + resultado);
}
function PrecioFinal() {
    precio1 = document.getElementById("PrecioUno").value;
    precio1 = parseInt(precio1);
    precio2 = document.getElementById("PrecioDos").value;
    precio2 = parseInt(precio2);
    precio3 = document.getElementById("PrecioTres").value;
    precio3 = parseInt(precio3);
    resultado = (precio1 + precio2 + precio3) * 1.21;
    alert("El precio con IVA es: " + resultado);
}