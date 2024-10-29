// Mascotas
// diana
// ximena padron
// natalia

// raza
// tipo de mascota
// Cuantos tenemos
// edad 
// color
// acuaticos o no=?
// peso
// alimentos

// Función constructora
// Siempre iniciará con una letra mayuscula.

function Mascota(nombreMascota, tipoMascota, raza, edad, color, esAcuatico, peso, alimentos, duenio) {
    this.nombreMascota = nombreMascota;
    this.tipoMascota = tipoMascota;
    this.raza = raza;
    this.edad = edad;
    this.color = color;
    this.esAcuatico = esAcuatico;
    this.peso = peso;
    this.alimentos = alimentos;
    this.duenio = duenio;
}

const mascota1 = new Mascota('Mango', 'Gato', 'No tiene raza', 0.6, 'naranja', false, 2, 'Croqueta', 'Diana Fuentes');
const mascota2 = new Mascota('Samba', 'Perro', 'Golden Retrievere', 10, 'rubio', true, 20, 'Croquetas  y Bolillos', 'Ximena Padrón');
const mascota3 = new Mascota('Pache', 'Perro', 'Husky', 5, 'blanco y negro', false, 25, 'pollo y croquetas', 'Natalia Flores');

console.log(mascota3);