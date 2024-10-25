// Promesa
// 3 Estados
// 1. Pendiente (Pending).
// 2. Resulta (Fulfilled).
// 3. Rechazado (Rejected)

/*
const miPromesa = new Promise((resolve, reject) => {
    // El código de mi aplicación
    // de manera asincróna

    if (condicion) {
        resolve('Éxito');
    } else {
        reject('Error');
    }
});
*/

/* Una promesa de ejemplo */

const promesaEjemplo = new Promise((resolve, reject) => {
    setTimeout(() => {
        const exitoAplicacion = false; // Simule que la aplicación sea exitosa
        if (exitoAplicacion) {
            resolve('La tarea se completo con éxito');
        } else {
            reject('Hubo un error al completar mi tarea');
        }
    }, 5000);
});

promesaEjemplo
    .then((resultado) => {
        console.log(resultado); // Imprimiria que la tarea fue un éxito
    })
    .catch((error) => {
        console.log(error); // Este mensaje será mostrado si nuestra primesa falla.
    });