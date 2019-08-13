function mostrar() {
    /**Enunciado:
    Bienvenidos. 
    Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 
    (validar), la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al 
    terminar el ingreso por document.write: 
    a) La cantidad de temperaturas pares. 
    b) La marca del producto más pesado 
    c) La cantidad de productos que se conservan a menos de 0 grados. 
    d) El promedio del peso de todos los productos.	
    f) El peso máximo y el mínimo.

    Testeo con los siguientes valores 
    (m=pepito;p = 50; t =-300(mal) ,-30(bien) ) 
    (m=teem;p = 10; t =0 ) 
    (m=llut;p = 150(mal), 15(bien); t =-13 ) 
    (m=fpy;p = 45; t =-12 ) */


    var marca;
    var peso;
    var temperatura;
    var cantTempPar = 0;
    var prodMasPesadoMarca;
    var prodMasPesadoPeso;
    var prodMenosPesadoPeso;
    var cantProdMenosCero = 0;
    var cantProd = 0;
    var sumaPesoProd = 0;
    var promedioPesos;

    marca = prompt("Ingrese la marca del producto:");
    marca = marca.toLowerCase();

    peso = prompt("Ingrese el peso del producto:");
    peso = parseInt(peso);
    while (isNaN(peso) || peso < 1 || peso > 100) {
        peso = prompt("ERROR... El peso solo puede ser un numero entre 1 y 100 inclusive\nReingrese el peso del producto:");
        peso = parseInt(peso);
    }

    temperatura = prompt("Ingrese la temperatura de almacenamiento:");
    temperatura = parseInt(temperatura);
    while (isNaN(temperatura) || temperatura < -30 || temperatura > 30) {
        temperatura = prompt("ERROR... La temperatura solo puede ser un numero entre -30 y 30 inclusive\nReingrese la temperatura de almacenamiento:");
        temperatura = parseInt(temperatura);
    }

    prodMasPesadoMarca = marca;
    prodMasPesadoPeso = peso;
    prodMenosPesadoPeso = peso;
    cantProd++;
    sumaPesoProd = sumaPesoProd + peso;
    if (temperatura % 2 == 0) {
        cantTempPar++;
    }
    if (temperatura < 0) {
        cantProdMenosCero++;
    }

    while (confirm("Desea ingresar otro producto?")) {
        marca = prompt("Ingrese la marca del producto:");
        marca = marca.toLowerCase();

        peso = prompt("Ingrese el peso del producto:");
        peso = parseInt(peso);
        while (isNaN(peso) || peso < 1 || peso > 100) {
            peso = prompt("ERROR... El peso solo puede ser un numero entre 1 y 100 inclusive\nReingrese el peso del producto:");
            peso = parseInt(peso);
        }

        temperatura = prompt("Ingrese la temperatura de almacenamiento:");
        temperatura = parseInt(temperatura);
        while (isNaN(temperatura) || temperatura < -30 || temperatura > 30) {
            temperatura = prompt("ERROR... La temperatura solo puede ser un numero entre -30 y 30 inclusive\nReingrese la temperatura de almacenamiento:");
            temperatura = parseInt(temperatura);
        }

        if (peso > prodMasPesadoPeso) {
            prodMasPesadoMarca = marca;
            prodMasPesadoPeso = peso;
        }
        if (peso < prodMenosPesadoPeso) {
            prodMenosPesadoPeso = peso;
        }
        cantProd++;
        sumaPesoProd = sumaPesoProd + peso;
        if (temperatura % 2 == 0) {
            cantTempPar++;
        }
        if (temperatura < 0) {
            cantProdMenosCero++;
        }
    }
    promedioPesos = sumaPesoProd / cantProd;

    document.write("<br>a) La cantidad de temperaturas pares. => " + cantTempPar);
    document.write("<br>b) La marca del producto más pesado => " + prodMasPesadoMarca);
    document.write("<br>c) La cantidad de productos que se conservan a menos de 0 grados. => " + cantProdMenosCero);
    document.write("<br>d) El promedio del peso de todos los productos. => " + promedioPesos);
    document.write("<br>f) El peso máximo. => " + prodMasPesadoPeso);
    document.write("<br>f) El peso mínimo. => " + prodMenosPesadoPeso);
}
