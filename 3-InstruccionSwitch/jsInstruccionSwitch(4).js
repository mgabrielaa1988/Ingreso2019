function mostrar() {
    var mesDelAño = document.getElementById("mes").value;
    switch (mesDelAño) {
        case "Febrero": {
            alert("Este mes tiene 28 días.");
            break;
        }
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre": {
            alert("Este mes tiene 30 dias.");
            break;
        }
        default: {
            alert("Este mes tiene 31 días.");
            break;
        }
    }

}//FIN DE LA FUNCIÓN