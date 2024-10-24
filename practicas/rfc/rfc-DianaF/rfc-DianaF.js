const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function devuelveNCaracteres(texto, numeroCaracteres = 1) {
    const arreglo = texto.trim().toUpperCase().split('');
    let nuevoTexto = arreglo[0];
    for (let indice = 1; indice < arreglo.length && nuevoTexto.length < numeroCaracteres; indice++) {
        if (['A', 'E', 'I', 'O', 'U'].includes(arreglo[indice])) {
            nuevoTexto += arreglo[indice];
        } 
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