function mostrar() {
    /**Enunciado:
    Bienvenidos (SWITCH). 
    pedir el ingreso de un planeta del sistema solar 
    Si es la tierra mostrar "acá vivimos". 
    Si está más cerca del sol, "acá hace más calor". 
    Si está más lejos del sol, "acá hace más frio". 
    Si no es un planeta valido informarlo. 
    Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra). */

    var planeta = prompt("Ingrese el nombre de un planeta del sistema solar:");
    planeta = planeta.toLowerCase();

    while (planeta != "mercurio" && planeta != "venus" && planeta != "tierra" && planeta != "marte" && 
        planeta != "jupiter" && planeta != "saturno" && planeta != "urano" && planeta != "neptuno") {
        planeta = prompt("ERROR... Ese no es el nombre se un planeta\nReingrese el nombre de un planeta del sistema solar:");
        planeta = planeta.toLowerCase();
    }

    switch (planeta) {
        case "tierra": {
            alert("Acá vivimos => " + planeta);
            break;
        }
        case "mercurio":
        case "venus": {
            alert("Acá hace más calor => " + planeta);
            break;
        }
        default: {
            alert("Acá hace más frio => " + planeta);
            break;
        }
    }
}
