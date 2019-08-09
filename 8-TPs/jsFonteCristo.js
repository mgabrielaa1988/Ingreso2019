/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo 
una aplicación que verifique las distintas cualidades de los números.
13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se 
encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/

function ComenzarIngreso() { }

function NumerosPares() {
    var mensaje = "";
    var contadorPares = 0;
    var numero = document.getElementById("numero").value;
    numero = parseInt(numero);
    if (isNaN(numero) || numero < 1) {
        alert("ERROR...\nSolo ingrese numeros positivos");
        document.getElementById("numero").value = 0;
    }
    else {
        for (var i = 1; i <= numero; i++) {
            if (i % 2 == 0) {
                mensaje = mensaje + "<br>Numero PAR => " + i;
                contadorPares++;
            }
        }
        document.write("Cantidad de numeros PARES: " + contadorPares + mensaje);
    }
}

function NumerosImpares() {
    var mensaje = "";
    var contadorImpares = 0;
    var numero = document.getElementById("numero").value;
    numero = parseInt(numero);
    if (isNaN(numero) || numero < 1) {
        alert("ERROR...\nSolo ingrese numeros positivos");
        document.getElementById("numero").value = 0;
    }
    else {
        for (var i = 1; i <= numero; i++) {
            if (i % 2 == 1) {
                mensaje = mensaje + "<br>Numero IMPAR => " + i;
                contadorImpares++;
            }
        }
        document.write("Cantidad de numeros IMPARES: " + contadorImpares + mensaje);
    }
}

function NumerosDivisibles() {
    mensaje = "";
    var numero = document.getElementById("numero").value;
    numero = parseInt(numero);
    if (isNaN(numero) || numero < 1) {
        alert("ERROR...\nSolo ingrese numeros positivos");
        document.getElementById("numero").value = 0;
    }
    else {
        for (var i = 1; i <= 100; i++) {
            if (numero % i == 0) {
                mensaje = mensaje + "<br>Numero DIVISIBLE => " + i;
            }
        }
        document.write("El numero " + numero + " es divisible por " + mensaje);
    }
}

function VerificarPrimo() {
    var primo = true;
    var numero = document.getElementById("numero").value;
    numero = parseInt(numero);
    if (isNaN(numero) || numero < 1) {
        alert("ERROR...\nSolo ingrese numeros positivos");
        document.getElementById("numero").value = 0;
    }
    else {
        for (var i = 2; i < numero; i++) {
            if (numero % i == 0) {
                primo = false;
                break;
            }
        }
        if (primo) {
            alert("El numero " + numero + " es PRIMO");
        }
        else {
            alert("El numero " + numero + " NO es PRIMO");
        }
    }
}

function NumerosPrimos() {
    var mensaje = "";
    var primo;
    var contadorPrimos = 0;
    var numero = document.getElementById("numero").value;
    numero = parseInt(numero);
    if (isNaN(numero) || numero < 1) {
        alert("ERROR...\nSolo ingrese numeros positivos");
        document.getElementById("numero").value = 0;
    }
    else {
        for (var i = 2; i <= numero; i++) {
            var j = 2;
            primo = true;
            while (primo && j < i) {
                if (i % j == 0) {
                    primo = false;
                }
                else {
                    j = j + 1;
                }
            }
            if (primo && numero > 1) {
                mensaje = mensaje + "<br>Numeros PRIMOS => " + i;
                contadorPrimos++;
            }
        }
        document.write("Cantidad de numeros PRIMOS: " + contadorPrimos + mensaje);
    }
}
