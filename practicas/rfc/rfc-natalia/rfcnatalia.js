const readline = require('readline');

// Crear la interfaz de entrada/salida para leer datos del usuario
const rl = readline.createInterface({
    input: process.stdin,  
    output: process.stdout 
});

// Esta función va a generar el RFC
function generarRFC(nombre, apellidoPaterno, apellidoMaterno, dia, mes, anio) {
    // Tomamos la primera letra del apellido paterno
    const primeraLetraApellidoPaterno = apellidoPaterno[0].toUpperCase();

    // Tomamos la primera vocal que encontremos en el apellido paterno
    const primeraVocalApellidoPaterno = apellidoPaterno.slice(1).match(/[AEIOUaeiou]/)?.[0]?.toUpperCase() || 'X';

    // Tomamos la primera letra del apellido materno (si no tiene, se muestra 'X')
    const primeraLetraApellidoMaterno = apellidoMaterno ? apellidoMaterno[0].toUpperCase() : 'X';

    // Tomamos la primer letra del nombre
    const primeraLetraNombre = nombre[0].toUpperCase();

    // Juntamos estas letras con la fecha de nacimiento (año, mes, día) y añadimos la homoclave 'XXX'
    const rfcCompleto = `${primeraLetraApellidoPaterno}${primeraVocalApellidoPaterno}${primeraLetraApellidoMaterno}${primeraLetraNombre}-${anio}${mes}${dia}-XXX`;

    return rfcCompleto; //  RFC generado
}

// Aquí pedimos al usuario que ingrese sus datos uno por uno
rl.question('Ingresa tu nombre(s): ', (nombre) => {
    rl.question('Ingresa tu apellido paterno: ', (apellidoPaterno) => {
        rl.question('Ingresa tu apellido materno (si no tienes, deja vacío): ', (apellidoMaterno) => {
            rl.question('Ingresa el día de nacimiento (2 dígitos): ', (diaNacimiento) => {
                rl.question('Ingresa el mes de nacimiento (2 dígitos): ', (mesNacimiento) => {
                    rl.question('Ingresa el año de nacimiento (2 dígitos): ', (anioNacimiento) => {
                        
                        // Ahora usamos la función para generar el RFC con los datos que ingresó el usuario
                        const rfc = generarRFC(nombre, apellidoPaterno, apellidoMaterno, diaNacimiento, mesNacimiento, anioNacimiento);
                        
                        // Mostramos el RFC generado
                        console.log(`\nTu RFC es: ${rfc}`);
                        
                        // Cerramos la interfaz de lectura
                        rl.close();
                    });
                });
            });
        });
    });
});
