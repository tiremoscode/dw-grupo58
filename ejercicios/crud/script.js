// Nombre
// Fecha de Nacimiento
// Signo Zodiacal.
// Cuantos días faltan para su cumpleaños.
// Sabor de Pastel
// Regalo favorito

// CRUD
// C - Create - crear un nuevo registro
// R - Read - leer un registro o no registros
// U - Update - Actualizar un registro existente
// D - Delete - Elimina un registro existente

let alumnasGrupo58 = [
    {
        nombre: 'Alberto',
        fechaNac: '1987-05-13',
        signo: 'Tauro',
        pastel: '3 Leches',
        regalo: 'Boletos'
    },
    {
        nombre: 'Ximena Padrón',
        fechaNac: '2000-11-17',
        signo: 'Escorpión',
        pastel: 'Oreo',
        regalo: 'Ropa Deportiva'
    }
];
let editarRegistro = -1;

const formulario = document.getElementById('formulario');
const lista = document.getElementById('listaCumple');

const diasFaltantes = (fecha) => {
    console.log('Fecha nacimiento ' + fecha);
    const hoy = new Date();
    console.log(hoy);

    const cumple = new Date(fecha);

    cumple.setFullYear(hoy.getFullYear());

    if (cumple < hoy) {
        cumple.setFullYear(hoy.getFullYear() + 1);
    }

    // Calcular la diferencia en milisegundos
    const diferencia = cumple - hoy;

    const cuantosdiasFaltan = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
    return cuantosdiasFaltan;
};

const listaAlumnas = () => {
    console.log('lista');
    lista.innerHTML = '';
    alumnasGrupo58.forEach((alumna, index) => {
        const divAlumna = document.createElement('div');
        divAlumna.innerHTML = `
            <p>Nombre: ${alumna.nombre}</p>
            <p>Fecha de Nacimiento: ${alumna.fechaNac}</p>
            <p>Signo Zodiacal: ${alumna.signo}</p>
            <p>¿Cuantos días faltan?: ${diasFaltantes(alumna.fechaNac)}</p>
            <p>Sabor: ${alumna.pastel}</p>
            <p>Regalo: ${alumna.regalo}</p>
            <button onclick="editarAlumna(${index})">Editar Alumna</button>
            <button onclick="eliminarAlumna(${index})">Eliminar Alumna</button>
            
        `;
        lista.appendChild(divAlumna);
    });
};

listaAlumnas();

formulario.addEventListener('submit', function (e) {
    console.log('Formulario submit');
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const fechaNac = document.getElementById('fechaNacimiento').value;
    const signo = document.getElementById('signoZodiacal').value;
    const pastel = document.getElementById('saborPastel').value;
    const regalo = document.getElementById('regaloFavorito').value;

    if (editarRegistro === -1) {
        // Creando una nueva alumna en mi CRUD
        alumnasGrupo58.push({ nombre, fechaNac, signo, pastel, regalo });
    } else {
        // Actualizar un registro existente
        alumnasGrupo58[editarRegistro] = { nombre, fechaNac, signo, pastel, regalo };
        editarRegistro = -1;
    }

    formulario.reset();
    listaAlumnas();
});

const editarAlumna = (index) => {
    console.log('Editar Alumna ', index);

    const buscarAlumna = alumnasGrupo58[index];
    console.log(buscarAlumna);

    document.getElementById('nombre').value = buscarAlumna.nombre;
    document.getElementById('fechaNacimiento').value = buscarAlumna.fechaNac;
    document.getElementById('signoZodiacal').value = buscarAlumna.signo;
    document.getElementById('saborPastel').value = buscarAlumna.pastel;
    document.getElementById('regaloFavorito').value = buscarAlumna.regalo;

    editarRegistro = index;
}

const eliminarAlumna = (index) => {
    console.log('Eliminar alumnoa ' + index);
    alumnasGrupo58.splice(index, 1);
    listaAlumnas();
};