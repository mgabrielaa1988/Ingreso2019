/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % 
y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un 
descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, 
si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos 
en informar del impuesto con el siguiente mensaje: ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {

    var unidad = 35;
    var precio;
    var ingBrutos;
    var cantidad = document.getElementById("Cantidad").value;
    while (isNaN(cantidad) || cantidad < 1) {
        alert("ERROR... Solo ingrese numeros positivos!");
        document.getElementById("Cantidad").value = 0;
    }
    cantidad = parseInt(cantidad);
    var marca = document.getElementById("Marca").value;
    precio = cantidad * unidad;

    switch (cantidad) {
        case 1:
        case 2: {
            precio = cantidad * unidad;
            break;
        }
        case 3: {
            if (marca == "ArgentinaLuz") {
                precio = precio * 0.85;
            }
            else if (marca == "FelipeLamparas") {
                precio = precio * 0.9;
            }
            else {
                precio = precio * 0.95;
            }
            break;
        }
        case 4: {
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
                precio = precio * 0.75;
            }
            else {
                precio = precio * 0.8;
            }
            break;
        }
        case 5: {
            if (marca == "ArgentinaLuz") {
                precio = precio * 0.6;
            }
            else {
                precio = precio * 0.7;
            }
            break;
        }
        default: {
            precio = precio * 0.5;
            break;
        }
    }

    if (precio > 120) {
        ingBrutos = precio * 0.1;
        precio = precio + ingBrutos;
        alert("Usted pago " + ingBrutos + " de IIBB.");
    }
    document.getElementById("precioDescuento").value = precio;
}
