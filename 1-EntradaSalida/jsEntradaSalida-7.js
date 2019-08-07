/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar() {
    var num1 = document.getElementById("numeroUno").value;
    num1 = parseInt(num1);
    var num2 = document.getElementById("numeroDos").value;
    num2 = parseInt(num2);
    var suma = num1 + num2;
    alert("Suma\n" + num1 + " + " + num2 + " = " + suma);
}

function restar() {
    var num1 = document.getElementById("numeroUno").value;
    num1 = parseInt(num1);
    var num2 = document.getElementById("numeroDos").value;
    num2 = parseInt(num2);
    var resta = num1 - num2;
    alert("Resta\n" + num1 + " - " + num2 + " = " + resta);
}

function multiplicar() {
    var num1 = document.getElementById("numeroUno").value;
    num1 = parseInt(num1);
    var num2 = document.getElementById("numeroDos").value;
    num2 = parseInt(num2);
    var multip = num1 * num2;
    alert("Multiplicacion\n" + num1 + " x " + num2 + " = " + multip);
}

function dividir() {
    var num1 = document.getElementById("numeroUno").value;
    num1 = parseInt(num1);
    var num2 = document.getElementById("numeroDos").value;
    num2 = parseInt(num2);
    var division;
    if (num2 != 0) {
        division = num1 / num2;
        alert("Division\n" + num1 + " / " + num2 + " = " + division);
    }
    else {
        alert("No se puede dividir por CERO...");
    }

}

