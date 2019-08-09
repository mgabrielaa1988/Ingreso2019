/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno 
rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular 
y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos 
mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
    var largo = document.getElementById("Largo").value;
    largo = parseInt(largo);
    var ancho = document.getElementById("Ancho").value;
    ancho = parseInt(ancho);
    var perimetro = 2 * (largo + ancho);
    alert("Perimetro del terreno: " + perimetro + "\nTotal de alambre: " + 3 * perimetro);
}
function Circulo() {
    var radio = document.getElementById("Radio").value;
    radio = parseInt(radio);
    var circunferencia = 2 * Math.PI * radio;
    circunferencia = parseInt(circunferencia);
    alert("Circunferencia del terreno: " + circunferencia + "\nTotal de alambre: " + 3 * circunferencia);
}
function Materiales() {
    var largo = document.getElementById("Largo").value;
    largo = parseInt(largo);
    var ancho = document.getElementById("Ancho").value;
    ancho = parseInt(ancho);
    var radio = document.getElementById("Radio").value;
    radio = parseInt(radio);
    areaRec = largo * ancho;
    areaCir = Math.PI * Math.pow(radio, 2);
    areaCir = parseInt(areaCir);
    var mensaje = "Contrapiso\n\nTerreno Rectangular: " + areaRec + " mts cuad.";
    mensaje = mensaje + "\nBolsas de cemento: " + 2 * areaRec;
    mensaje = mensaje + "\nBolsas de cal: " + 3 * areaRec;
    mensaje = mensaje + "\n\nTerreno Circular: " + areaCir + " mts cuad.";
    mensaje = mensaje + "\nBolsas de cemento: " + 2 * areaCir;
    mensaje = mensaje + "\nBolsas de cal: " + 3 * areaCir;
    alert(mensaje);
}