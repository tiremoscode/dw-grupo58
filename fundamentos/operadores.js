function operadores() {

    var edad = 18;
    var nacionalidadMexicana = false;

    // AND
    if (edad >= 18 && nacionalidadMexicana) {
        console.log('Puede entregarse la INE');
    } else {
        console.log('No se podrá entregar la INE');
    }

    // OR

    if (edad >= 18 || nacionalidadMexicana) {
        console.log('Puede pasar al antro');
    } else {
        console.log('No puede pasar al antro')
    }

    // NOT

    if (!(edad >= 18 || nacionalidadMexicana)) {
        console.log('No puede pasar al antro');
    } else {
        // si tienes 18 años o más ó es mexicano
        console.log('Puede pasar al antro');
    }

}
