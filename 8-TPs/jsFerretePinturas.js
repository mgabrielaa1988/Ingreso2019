/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados 
con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit 
(ej.: "0  centígrados son 32 Fahrenheit ").
*/

var temperatura;

function FahrenheitCentigrados() {
    temperatura = document.getElementById("Temperatura").value;
    temperatura = parseInt(temperatura);
    var centigrados = temperatura - 32;
    alert(temperatura + " Fahrenheit son " + centigrados + " centigrados");
}

function CentigradosFahrenheit() {
    temperatura = document.getElementById("Temperatura").value;
    temperatura = parseInt(temperatura);
    var fahrenheit = temperatura + 32;
    alert(temperatura + " centigrados son " + fahrenheit + " Fahrenheit");
}
