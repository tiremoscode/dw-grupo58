const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const nombre = 'Diana';
const apellidoPaterno = 'Fuentes';
const apellidoMaterno = 'Servin';
const diaDeNacimiento = '10';
const mesDeNacimiento = '09';
const anoDeNacimiento = '98';


function devuelveNCaracteres(texto, numeroCaracteres = 1) {
    const arreglo = Array.from(texto.trim());
    if (numeroCaracteres === 1) return arreglo[0].toUpperCase();

    let nuevoTexto = arreglo[0].toUpperCase();
    for (let indice = 1; indice < arreglo.length; indice++) {
        if (['A', 'E', 'I', 'O', 'U'].includes(arreglo[indice].toUpperCase())) {
            nuevoTexto += arreglo[indice].toUpperCase();
        } if (nuevoTexto.length === numeroCaracteres) break;
    }
    return nuevoTexto;
}





rl.question('Ingresa tu nombre: ', (nombre) => {
    rl.question('Ingresa tu primer apellido: ', (apellidoPaterno) => {
        rl.question('Ingresa tu segundo apellido: ', (apellidoMaterno) => {
            rl.question('Ingresa tu dia de nacimiento: ', (diaDeNacimiento) => {
                rl.question('Ingresa tu mes de nacimiento: ', (mesDeNacimiento) => {
                    rl.question('Ingresa tu año de nacimiento: ', (anoDeNacimiento) => {
                        if (anoDeNacimiento.length > 2) {
                            console.error('Solo se requieren 2 digitos para el año')
                            rl.close();
                            return
                        }

                        const resultado = devuelveNCaracteres(apellidoPaterno, 2);
                        const resultadoTexto = devuelveNCaracteres(nombre);
                        const resultadoTexto2 = devuelveNCaracteres(apellidoMaterno);
                        console.log('Tu RFC es: ' + resultado + resultadoTexto2 + resultadoTexto + '-' + anoDeNacimiento + mesDeNacimiento + diaDeNacimiento + '-XXX');
                        rl.close();
                    })
                })
            })
        })
    })
})