function mostrar() {
    /**Enunciado:
    Bienvenidos. 
    Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , 
    el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
    a) El promedio de las notas totales. 
    b) La nota más baja y el sexo de esa persona. 
    c) La cantidad de varones que su nota haya sido mayor o igual a 6. */

    var notas;
    var acumNotas = 0;
    var sexo;
    var promedio;
    var notaBaja;
    var sexNotaBaja;
    var flag = true;
    var mNotaMaySeis = 0;
    var mensaje;

    for (var i = 0; i < 5; i++) {
        notas = prompt("Ingrese la nota:");
        notas = parseInt(notas);
        while (isNaN(notas) || notas < 0 || notas > 10) {
            notas = prompt("ERROR... Solo se permiten numeros entre 0 y 10\nIngrese la nota:");
            notas = parseInt(notas);
        }
        acumNotas = acumNotas + notas;

        sexo = prompt("Ingrese el sexo:");
        sexo = sexo.toLowerCase();
        while (sexo != "f" && sexo != "m") {
            sexo = prompt("ERROR... Solo se permite F para femenino y M para masculino\nIngrese el sexo:");
            sexo = sexo.toLowerCase();
        }

        if (flag || notas < notaBaja) {
            notaBaja = notas;
            sexNotaBaja = sexo;
            flag = false;
        }

        if (notas >= 6 && sexo == "m") {
            mNotaMaySeis++;
        }
    }
    promedio = acumNotas / 5;

    mensaje = "Promedio de las notas: " + promedio + "\nLa nota mas baja es " + notaBaja + " , sexo ";
    if (sexNotaBaja == "f") {
        mensaje = mensaje + " femenino\n";
    }
    else {
        mensaje = mensaje + " masculino\n";
    }
    mensaje = mensaje + "La cantidad de varones con nota mayor o igual a 6 es: " + mNotaMaySeis;
    alert(mensaje);

}
