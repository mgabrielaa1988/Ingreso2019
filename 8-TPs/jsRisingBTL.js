/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar 
una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y 
cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */

function ComenzarIngreso() {
    var edad = prompt("Ingrese su edad: ");
    edad = parseInt(edad);
    while (isNaN(edad) || edad < 18 || edad > 90) {
        edad = prompt("Ingrese solo numeros entre 18 y 90 inclusive\nIngrese su edad: ");
        edad = parseInt(edad);
    }
    document.getElementById("Edad").value = "Edad: " + edad;

    var sexo = prompt("Ingrese su sexo (F/M):");
    sexo = sexo.toUpperCase();
    while (sexo != "F" && sexo != "M") {
        sexo = prompt("Ingrese F para sexo femenino o M para sexo masculino\nIngrese su sexo: ");
        sexo = sexo.toUpperCase();
    }
    if (sexo == "F") {
        document.getElementById("Sexo").value = "Sexo: Femenino";
    }
    else if (sexo == "M") {
        document.getElementById("Sexo").value = "Sexo: Masculino";
    }

    var estadoCivil = prompt("Ingrese su estado civil\n1 - solteros\n2 - casados\n3 - divorciados\n4 - viudos");
    estadoCivil = parseInt(estadoCivil);
    while (isNaN(estadoCivil) || estadoCivil < 1 || estadoCivil > 4) {
        estadoCivil = prompt("Ingrese solo numeros del 1 al 4 \n1 - para solteros\n2 - para casados\n3 - para divorciados\n4 - para viudos");
        estadoCivil = parseInt(estadoCivil);
    }
    switch (estadoCivil) {
        case 1: {
            document.getElementById("EstadoCivil").value = "Estado Civil: Soltero";
            break;
        }
        case 2: {
            document.getElementById("EstadoCivil").value = "Estado Civil: Casado";
            break;
        }
        case 3: {
            document.getElementById("EstadoCivil").value = "Estado Civil: Divorciado";
            break;
        }
        case 4: {
            document.getElementById("EstadoCivil").value = "Estado Civil: Viudo";
            break;
        }
    }

    var sueldo = prompt("Ingrese su sueldo bruto: ");
    sueldo = parseInt(sueldo);
    while (isNaN(sueldo) || sueldo < 8000) {
        sueldo = prompt("Ingrese solo numeros mayores o iguales a 8000\nIngrese su sueldo bruto");
        sueldo = parseInt(sueldo);
    }
    document.getElementById("Sueldo").value = "Sueldo bruto: $" + sueldo;

    var legajo = prompt("Ingrese su numero de legajo: ");
    legajo = parseInt(legajo);
    while (isNaN(legajo) || legajo < 1000 || legajo > 9999) {
        legajo = prompt("Ingrese solo numeros de 4 cifras sin ceros a la izquierda\nIngrese su legajo: ");
        legajo = parseInt(legajo);
    }
    document.getElementById("Legajo").value = "Legajo: " + legajo;

    var nacionalidad = prompt("Ingrese su nacionalidad\nA argentinos\nE extranjeros\nN nacionalizados");
    nacionalidad = nacionalidad.toUpperCase();
    while (nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N") {
        nacionalidad = prompt("Ingrese su nacionalidad\nA para argentinos\nE para extranjeros\nN para nacionalizados");
        nacionalidad = nacionalidad.toUpperCase();
    }
    switch (nacionalidad) {
        case "A": {
            document.getElementById("Nacionalidad").value = "Nacionalidad: Argentino";
            break;
        }
        case "E": {
            document.getElementById("Nacionalidad").value = "Nacionalidad: Extranjero";
            break;
        }
        case "N": {
            document.getElementById("Nacionalidad").value = "Nacionalidad: Nacionalizado";
            break;
        }
    }
}
