console.log(miVariable);
var miVariable = 'Hola';
console.log(miVariable);

// console.log(miLet);
let miLet = 'Hola Deyla';
console.log(miLet);

// Hoisting con funcione.

saludarAMaya();

function saludarAMaya() {
    console.log('Hola Maya!!!');
}

saludarAMaya();

// saludarAfati();
const saludarAfati = function () {
    console.log('hola faty');
}
saludarAfati();

for (const i = 0; i < 5; i++) {
    console.log('El valor de let i es igual a ' + i);
}

console.log('el valor de let i es igual a ' + i);

// Ximena - el for no lo va a hacer, no se si seria un error porque no puede incrementar la i de 1 en 1
// se va a quedar en 0 y en la segunda impresión pues imprimiria un valor de let i es igual a 0.

// Karina - en la primera impresión, va a imprimir un 0 y en la segunda
// puede ser un 1.

// Diana - La variable es constante va a dar error dentro del for, no va a poder realizar el for
// por ser una constante. y en la línea 29 yo creo que imprimirá un undefined.