const catalogoTasacion = [
    { id: "commodore64", nombre: "Commodore 64", precioMax: 300 },
    { id: "amiga500", nombre: "Commodore Amiga 500", precioMax: 400 },
    { id: "snes", nombre: "Super Nintendo (SNES)", precioMax: 150 },
    { id: "gameboy", nombre: "Nintendo Game Boy Classic", precioMax: 90 },
    { id: "neogeo", nombre: "Placa Arcade Neo Geo MVS", precioMax: 600 },
    { id: "monitor_sony", nombre: "Monitor CRT Sony Trinitron", precioMax: 120 },
    { id: "teclado_ibm", nombre: "Teclado IBM Model M", precioMax: 180 },
    { id: "raton_apple", nombre: "Apple Desktop Bus Mouse", precioMax: 45 },
    { id: "walkman", nombre: "Sony Walkman WM-F41", precioMax: 80 }
];

function mostrarCatalogoConsola() {
    console.log("Lista de precios");

    for (let i = 0; i < catalogoTasacion.length; i++) {
        let equipo = catalogoTasacion[i];
        console.log(equipo.nombre + " = " + equipo.precioMax + "€");
    }
}

function obtenerPrecioEstimado(idBuscado) {
    let precioEncontrado = 0;
    let i = 0;

    while (i < catalogoTasacion.length) {
        if (catalogoTasacion[i].id == idBuscado) {
            precioEncontrado = catalogoTasacion[i].precioMax;
            break;
        }
        i++;
    }

    return precioEncontrado;
}

function procesarFormularioContacto() {

    let inputNombre = document.getElementById("nombre").value;
    let inputCantidad = document.getElementById("cantidad").value;
    let selectEquipo = document.getElementById("equipo_interes").value;

    if (inputCantidad < 1) {
        alert("Error: La cantidad minima debe de ser de 1");
        return;
    }

    let stringPuntos = "";
    let contador = 0;
    do {
        stringPuntos += ".";
        contador++;
    } while (contador < 3);

    let totalEstimado = 0;

    if (selectEquipo != "ninguno") {
        let precioUnitario = obtenerPrecioEstimado(selectEquipo);
        totalEstimado = precioUnitario * inputCantidad;
    }

    if (totalEstimado > 0) {
        alert("Calculando" + stringPuntos + " Hola " + inputNombre + ", el precio total estimado para tu equipo es: " + totalEstimado + "€");
    } else {
        alert("Hola " + inputNombre + ", hemos recibido tu consulta. Te responderemos pronto.");
    }
}

mostrarCatalogoConsola();