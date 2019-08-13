function mostrar() {
    /**Enunciado:
    Bienvenidos. 
    Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 
    (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
    a) La cantidad de números pares. 
    b) La cantidad de números impares. 
    c) La cantidad de ceros. 
    d) El promedio de todos los números positivos ingresados. 
    e) La suma de todos los números negativos. 
    f) El número y la letra del máximo y el mínimo.

    Testeo con los siguientes datos 
    ( d , -150(mal) , -50(bien)) 
    ( z , 0) 
    ( g , 20) 
    ( a , 150(mal) , 0(bien)) 
    ( b , 3) 
    ( k , 7) */

    var letra;
    var noLetras = "0123456789";
    var esLetra = true;
    var numero;
    var cantPares = 0;
    var cantImpares = 0;
    var cantCeros = 0;
    var acumPositiv = 0;
    var contadorPos = 0;
    var promPositiv;
    var sumaNeg = 0;
    var numMax;
    var letraMax;
    var numMin;
    var letraMin;

    letra = prompt("Ingrese una letra: ");
    letra = letra.toLowerCase();
    for (var i = 0; i < letra.length; i++) {
        if (noLetras.indexOf(letra.charAt(i), 0) != -1) {
            esLetra = false;
            break;
        }
    }
    while (letra.length > 1 || esLetra == false) {
        letra = prompt("ERROR... Solo puede ingreser un caracter\ny este debe ser una letra\nIngrese una letra: ");
        letra = letra.toLowerCase();
        esLetra = true;
        for (var i = 0; i < letra.length; i++) {
            if (noLetras.indexOf(letra.charAt(i), 0) != -1) {
                esLetra = false;
                break;
            }
        }
    }

    numero = prompt("Ingrese un numero: ");
    numero = parseInt(numero);
    while (isNaN(numero) || numero < -100 || numero > 100) {
        numero = prompt("ERROR... Solo puede ingresar numeros\nentre -100 y 100\nReingrese un numero:");
        numero = parseInt(numero);
    }

    if (numero % 2 == 0) {
        cantPares++;
    } else {
        cantImpares++;
    }

    if (numero == 0) {
        cantCeros++;
    }
    else if (numero > 0) {
        acumPositiv = acumPositiv + numero;
        contadorPos++;
    }
    else {
        sumaNeg = sumaNeg + numero;
    }

    numMax = numero;
    numMin = numero;
    letraMax = letra;
    letraMin = letra;

    while (confirm("Desea seguir?")) {
        letra = prompt("Ingrese una letra: ");
        letra = letra.toLowerCase();
        for (var i = 0; i < letra.length; i++) {
            if (noLetras.indexOf(letra.charAt(i), 0) != -1) {
                esLetra = false;
                break;
            }
        }
        while (letra.length != 1 || esLetra == false) {
            letra = prompt("ERROR... Solo puede ingreser un caracter\ny este debe ser una letra\nIngrese una letra: ");
            letra = letra.toLowerCase();
            esLetra = true;
            for (var i = 0; i < letra.length; i++) {
                if (noLetras.indexOf(letra.charAt(i), 0) != -1) {
                    esLetra = false;
                    break;
                }
            }
        }
        numero = prompt("Ingrese un numero: ");
        numero = parseInt(numero);
        while (isNaN(numero) || numero < -100 || numero > 100) {
            numero = prompt("ERROR... Solo puede ingresar numeros\nentre -100 y 100\nReingrese un numero:");
            numero = parseInt(numero);
        }
        if (numero % 2 == 0) {
            cantPares++;
        } else {
            cantImpares++;
        }

        if (numero == 0) {
            cantCeros++;
        }
        else if (numero > 0) {
            acumPositiv = acumPositiv + numero;
            contadorPos++;
        }
        else {
            sumaNeg = sumaNeg + numero;
        }
        if (numMax < numero) {
            numMax = numero;
            letraMax = letra;
        }
        if (numMin > numero) {
            numMin = numero;
            letraMin = letra;
        }
    }

    promPositiv = acumPositiv / contadorPos;

    document.write("<br>a) La cantidad de números pares. => " + cantPares);
    document.write("<br>b) La cantidad de números impares. => " + cantImpares);
    document.write("<br>c) La cantidad de ceros. => " + cantCeros);
    document.write("<br>d) El promedio de todos los números positivos ingresados. => " + promPositiv);
    document.write("<br>e) La suma de todos los números negativos. => " + sumaNeg);
    document.write("<br>f) El número y la letra del máximo. => " + numMax + " " + letraMax);
    document.write("<br>f) El número y la letra del mínimo. => " + numMin + " " + letraMin);

}
