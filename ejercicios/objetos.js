// Objeto
// Colección de propiedades donde cada propiedad va a tener una clave (nombre) y un valor (un valor que tendrá asignado mi nombre).

// Datos primitivos
let nombre = 'Brneda';
let fueAprobado = true;
let edad = 18;
let pi = 3.1416;

// forma básica de un objeto.
// estructura clave valor. Clave va a tener siempre un valor (puede tener cualquier tipo de dato, incluso otros objetos).
// dinámico. que pueden ser modificados en tiempo de ejecución. Podemos ir agregando, cambiando o eliminando propiedades de mi objeto después de que fue creado.
// referencia. Cuando asignamos un objeto a na variable estamos aisgnado una referencia a la ubicación en memoria de objeto.

const alumna1 = {
    nombre: 'Ana Ximena con X Padrón Muñoz',
    edad: 23,
    genero: 'Femenino',
    nacionalidad: 'Mexicana',
    profesion: 'Capacitadora en el INE',
};

const alumna2 = {
    nombre: 'Ximena Torres Montesinos con s',
    edad: 26,
    genero: 'Femenino',
    nacionalidad: 'Mexicana',
    profesion: 'Analista en Seguros Atlas',
};

const alumna3 = {
    nombre: 'Brenda Leticia Torres Mendez',
    edad: 26,
    genero: 'Femenino',
    nacionalidad: 'Mexicana',
    profesion: 'Abogado en Propiedad Intelectual',
};

const grupo58 = [
    {
        nombre: 'Ana Ximena con X Padrón Muñoz',
        edad: 23,
        genero: 'Femenino',
        nacionalidad: 'Mexicana',
        profesion: 'Capacitadora en el INE',
        hobbies: {
            irAPatinar: false,
            jugarVideojuegos: false,
            cocinar: true,
            patinar: null,
            videojuegos: []
        }
    }, {
        nombre: 'Ximena Torres Montesinos con s',
        edad: 26,
        genero: 'Femenino',
        nacionalidad: 'Mexicana',
        profesion: 'Analista en Seguros Atlas',
        hobbies: {
            irAPatinar: false,
            jugarVideojuegos: true,
            cocinar: true,
            patinar: null,
            videojuegos: [{
                id: 1,
                title: 'Mario Kart'
            }, {
                id: 2,
                title: 'Smash'
            }]
        }
    }, {
        nombre: 'Brenda Leticia Torres Mendez',
        edad: 26,
        genero: 'Femenino',
        nacionalidad: 'Mexicana',
        profesion: 'Abogado en Propiedad Intelectual',
        hobbies: {
            irAPatinar: false,
            jugarVideojuegos: true,
            cocinar: true,
            patinar: null,
            videojuegos: [{
                id: 1,
                title: 'Resident Evil'
            }, {
                id: 2,
                title: 'Crash Bandicoot'
            }]
        }
    }
];

console.log(alumna1);
console.log(grupo58);
