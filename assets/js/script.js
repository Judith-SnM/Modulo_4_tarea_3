class Propietario {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre
        this.direccion = direccion
        this.telefono = telefono
    }
    datosPropietarios() {
        return `El nombre del dueño es: ${this.nombre}. El domicilio es: ${this.direccion}, y el número telefónico de contacto: ${this.telefono}`;
    }
}
class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono)
        this.tipo = tipo
    }
    get gettipo() {
        return `El tipo de animal es un: ${this.tipo}`;
    }
}
class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo)
        this.nombreMascota = nombreMascota
        this.enfermedad = enfermedad
    }
    get getnombreMascota() {
        return `El nombre de la mascota es: ${this.nombreMascota}`;
    }
    get getenfermedad() {
        return `y la enfermedad es: ${this.enfermedad}`;
    }

}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const propietarioInput = document.getElementById('propietario').value;
        const telefonoInput = document.getElementById('telefono').value;
        const direccionInput = document.getElementById('direccion').value;
        const nombreMascotaInput = document.getElementById('nombreMascota').value;
        const tipoInput = document.getElementById('tipo').value;
        const enfermedadInput = document.getElementById('enfermedad').value;

        switch (tipoInput) {
            case "perro":
                const perro = new Mascota(propietarioInput, direccionInput, telefonoInput, tipoInput, nombreMascotaInput, enfermedadInput);
                mostrarResultado(perro)
                break;
            case "gato":
                const gato = new Mascota(propietarioInput, direccionInput, telefonoInput, tipoInput, nombreMascotaInput, enfermedadInput);
                mostrarResultado(gato)
                break;
            case "conejo":
                const conejo = new Mascota(propietarioInput, direccionInput, telefonoInput, tipoInput, nombreMascotaInput, enfermedadInput);
                mostrarResultado(conejo)
                break;
            default:
                break;
        }
    });
})


let mostrarResultado = function (tipo) {
    let resultado = document.querySelector('#resultado ul');

    const liPropietario = document.createElement(`li`);
    liPropietario.textContent = tipo.datosPropietarios();
    resultado.appendChild(liPropietario);

    const liMascota = document.createElement('li');
    liMascota.textContent = (`${tipo.gettipo}, ${tipo.getnombreMascota}, ${tipo.getenfermedad}`)
    resultado.appendChild(liMascota);
}
