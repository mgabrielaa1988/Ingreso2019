function mostrar() {
    /**Enunciado:
    Bienvenidos (IF). 
    Pedir dos números y mostrar el resultado: 
    Si son iguales los muestro concatenados. 
    Si el primero es mayor, los resto, 
    de lo contrario los sumo. 
    Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje 
    "la suma es xxx y supero el 10". */

    var num1 = prompt("Ingrese el primer numero: ");
    num1 = parseInt(num1);
    while (isNaN(num1)) {
        num1 = prompt("ERROR... Solo puede ingresar numeros!\nReingrese el primer numero: ");
        num1 = parseInt(num1);
    }

    var num2 = prompt("Ingrese el segundo numero: ");
    num2 = parseInt(num2);
    while (isNaN(num2)) {
        num2 = prompt("ERROR... Solo puede ingresar numeros!\nReingrese el segundo numero: ");
        num2 = parseInt(num2);
    }

    var suma = num1 + num2;
    var resta = num1 - num2;
    var mensaje;
    if (num1 == num2) {
        alert("Los numeros son iguales\nLos muestro concatenados: \n" + num1 + num2);
    }
    else if (num1 > num2) {
        alert("El primer numero es mayor, los resto\n" + resta);
    }
    else {
        mensaje = "El segundo numero es mayor, los sumo\n" + suma;
        if (suma > 10) {
            mensaje = "La suma es " + suma + " y supero el 10";
        }
        alert(mensaje);
    }


}
