class Mascota {
    constructor(nombreMascota, tipo, sonidoMascota) {
        this.nombreMascota = nombreMascota;
        this.tipo = tipo;
        this.sonido = sonidoMascota;
    }

    hacerSonido() {
        console.log(`${this.nombreMascota} hace un sonido: ${this.sonido}`);
    }
}

const mascota1 = new Mascota('Mango', 'Gato', 'Maulla');
const mascota2 = new Mascota('Samba', 'Perro', 'Ladra');
const mascota3 = new Mascota('Pache', 'Perro', 'Ladra');

mascota1.hacerSonido();
mascota2.hacerSonido();