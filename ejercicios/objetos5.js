// Accediendo a propiedades en un objeto
const alumna1 = {
    nombre: 'Ana Ximena con X Padrón Muñoz',
    edad: 23,
    genero: 'Femenino',
    nacionalidad: 'Mexicana',
    profesion: 'Capacitadora en el INE',
    equipoFutbol: 'América'
};

// notación de punto
console.log(alumna1.nombre);

// notación de corchetes
console.log(alumna1["edad"]);

// Modificar propiedades
alumna1.edad = 33; // Modificando una propiedad existente.
console.log(alumna1.edad);

alumna1.comidaFavorita = 'Enchiladas';
console.log(alumna1);

// eliminar propiedades de un objeto.
delete alumna1.equipoFutbol;

console.log(alumna1);
console.log(alumna1.equipoFutbol);