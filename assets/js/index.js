import Camiseta from "../../Camiseta.js";
import { misCamisetas } from "../../Camisetas.js";

const ids = [];

let CarritoFinal = [];
(function Main() {
    const nombre = preguntarNombre();
    const tipoCamisetaSeleccionada = seleccionDeCamiseta(nombre);
    const camisetaClub = camisetas(tipoCamisetaSeleccionada);
})();

function preguntarNombre() {
    let nombre;
    do {
        nombre = prompt("Ingrese su nombre");
    } while ((nombre === null) || (nombre === "") || (!isNaN(nombre)));
    return nombre;
}

function seleccionDeCamiseta(nombre) {
    let tipoCamiseta;
    do {
        tipoCamiseta = prompt("Hola " + nombre + " qué andás buscando hoy?(elegí el número deseado) \n1) Camisetas Clubes \n2) Camisetas Selecciones \n3) Camisetas Retro ");

        if (isNaN(tipoCamiseta)) {
            alert("Ingresa una opcion valida (solo numeros)");
        }

        if ((tipoCamiseta < 1) || (tipoCamiseta > 3)) {
            alert("Opciones validas: 1, 2 o 3");
        }
    } while ((tipoCamiseta === undefined) || (isNaN(tipoCamiseta)) || (tipoCamiseta === null) || (tipoCamiseta === "") || (tipoCamiseta < 1) || (tipoCamiseta > 3));
    return tipoCamiseta;
}

function camisetas(id) {
    switch (id) {
        case "1":
            alert("Muy buena eleccion ");
            Clubes();
            break;
        case "2":
            alert("Muy buena eleccion");
            Selecciones();
            break;
        case "3":
            alert("Muy buena eleccion");
            Retro();
            break;
        default:
            break;
    }
}

function Clubes() {
    let equipoSeleccionado = prompt("Elegí el equipo que querés \n1 VELEZ SARSFIELD \n2 BOCA JUNIORS \n3 RIVER PLATE");
    let cantidad;

    if (isNaN(equipoSeleccionado) || (equipoSeleccionado === "") || (equipoSeleccionado === null)) {
        alert("Opciones validas 1, 2 o 3");
        return Clubes();
    }

    if ((equipoSeleccionado < 1) || (equipoSeleccionado > 3)) {
        alert("Opciones validas 1, 2 o 3");
        return Clubes();
    }

    const preguntarCantidad = () => {
        cantidad = prompt("Cuantas camisetas queres?");

        if ((isNaN(cantidad)) || (cantidad === "") || (cantidad === null)) {
            return preguntarCantidad();
        }
    }

    preguntarCantidad();
    ids.push({
        camiseta: equipoSeleccionado,
        cantidad: cantidad
    })
    
    ConvertirCarrito(ids);
}

function Selecciones() {
    console.log("elegiste retro")
    let equipoSeleccionado = prompt("Elegí el equipo que querés \n4 ARGENTINA \n5 FRANCIA  \n6 BRASIL");
    let cantidad;

    if (isNaN(equipoSeleccionado) || (equipoSeleccionado === "") || (equipoSeleccionado === null)) {
        alert("Opciones validas 4, 5 o 6")
        return Selecciones()
    }

    if ((equipoSeleccionado < 4) || (equipoSeleccionado > 6)) {
        alert("Opciones validas 4, 5 o 6");
        return Selecciones();
    }

    const preguntarCantidad = () => {
        cantidad = prompt("Cuantas camisetas queres?");

        if ((isNaN(cantidad)) || (cantidad === "") || (cantidad === null)) {
            return preguntarCantidad()
        }
    }

    preguntarCantidad();
    ids.push({
        camiseta: equipoSeleccionado,
        cantidad: cantidad
    })
    
    ConvertirCarrito(ids);
}

function Retro() {
    console.log("elegiste retro");
    let equipoSeleccionado = prompt("Elegí el equipo que querés \n7 ARGENTINA `78 \n8 ARGENTINA `86 \n9 ARGENTINA `94");
    let cantidad;

    if (isNaN(equipoSeleccionado) || (equipoSeleccionado === "") || (equipoSeleccionado === null)) {
        alert("Opciones validas 7, 8 o 9");
        return Retro();
    }

    if ((equipoSeleccionado < 7) || (equipoSeleccionado > 9)) {
        alert("Opciones validas 7, 8 o 9");
        return Retro();
    }

    const preguntarCantidad = () => {
        cantidad = prompt("Cuantas camisetas queres?");

        if ((isNaN(cantidad)) || (cantidad === "") || (cantidad === null)) {
            return preguntarCantidad();
        }
    }

    preguntarCantidad();
    ids.push({
        camiseta: equipoSeleccionado,
        cantidad: cantidad
    })
    
    ConvertirCarrito(ids);
}


function ConvertirCarrito(ids) {
    const findProduct = (id) => misCamisetas.find(elem => elem.id === parseInt(id));
    CarritoFinal = ids.map((prod) => {
        const findedProduct = findProduct(prod.camiseta);
        if (findProduct(prod.camiseta)) {
            return {
                cantidad: parseInt(prod.cantidad),
                ...findedProduct
            }
        }
        return prod;
    })
    console.log(CarritoFinal);
}
