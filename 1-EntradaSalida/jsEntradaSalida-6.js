/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
    var num1 = document.getElementById("numeroUno").value;
    num1 = parseInt(num1);
    var num2 = document.getElementById("numeroDos").value;
    num2 = parseInt(num2);
    var suma = num1 + num2;
    alert("Suma\n" + num1 + " + " + num2 + " = " + suma);
    //para hacer un salto de linea en un alert se utiliza -> \n
}

