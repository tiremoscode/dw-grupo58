// Declaraciónde variables.

// var 
// let
// const

// let nombre = 'Leslie';
// console.log(nombre); // Leslie

// Cambiar el valor de mi variable nombre.
nombre = 'Diana';
console.log('Nombre ', nombre);

const apellido = 'Fuentes';
console.log('Apellido ', apellido);

// Al cambiar un valor de tipo constante, obtendremos un error.
// apellido = 'Mendez';

// Alcance para var vs let.

function ejercicioAlcance() {
    if (true) {
        var variableTipoVar = 'Estoy usando una variable de tipo var';
        let variableTipoLet = 'Estoy usando una variable de tipo let';
        console.log('fatima ', variableTipoLet);
    }
    variableTipoVar = 'Ahora cambio el valor de la variable var';

    console.log('Variable tipo var tiene el mensaje: ', variableTipoVar);
    // console.log('Variable tipo let tiene el mensaje: ', variableTipoLet);
}

ejercicioAlcance();
