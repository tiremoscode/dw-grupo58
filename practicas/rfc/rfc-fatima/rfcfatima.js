const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para generar el RFC
function generaRFC(nombre, apellidoP, apellidoM, dia, mes, año) {
    // Tomamos las primeras dos letras del apellido paterno, asegurándonos que la segunda sea vocal o la siguiente letra
    let primeraLetraPaterno = apellidoP.charAt(0);
    let segundaLetraPaterno = apellidoP.slice(1).match(/[aeiou]/i) ? apellidoP.slice(1).match(/[aeiou]/i)[0] : apellidoP.charAt(1);
                              //si la segunda letra es vocal?*   | si es vocal, toma la vocal | si no, toma la siguiente letra 
                              

    // Tomamos la primera letra del apellido materno
    let primeraLetraMaterno = apellidoM.charAt(0);

    // Tomamos la primera letra del nombre
    let primeraLetraNombre = nombre.charAt(0);

    // Tomamos los dos últimos dígitos del año
    let añoDosDigitos = año.slice(2);

    // Tomamos el mes y lo convertimos a dos dígitos
    let mesDosDigitos = mes.length < 2 ? '0' + mes : mes;

    // Tomamos el día y lo convertimos a dos dígitos
    let diaDosDigitos = dia.length < 2 ? '0' + dia : dia;

    // Convertimos a mayúsculas
    primeraLetraPaterno = primeraLetraPaterno.toUpperCase();
    segundaLetraPaterno = segundaLetraPaterno.toUpperCase();
    primeraLetraMaterno = primeraLetraMaterno.toUpperCase();
    primeraLetraNombre = primeraLetraNombre.toUpperCase();

    // Generamos el RFC
    let rfc = primeraLetraPaterno + segundaLetraPaterno + primeraLetraMaterno + primeraLetraNombre + '-' + añoDosDigitos + mesDosDigitos + diaDosDigitos + '-';

    // Agregamos la homoclave XXX
    rfc += 'XXX';

    return rfc;
}

// Interacción con la consola
rl.question('Ingresa tu(s) nombre(s): ', (nombre) => {
    rl.question('Ingresa tu apellido paterno: ', (apellidoP) => {
        rl.question('Ingresa tu apellido materno: ', (apellidoM) => {
            rl.question('Ingresa tu día de nacimiento (2 dígitos): ', (dia) => {
                rl.question('Ingresa tu mes de nacimiento (2 dígitos): ', (mes) => {
                    rl.question('Ingresa tu año de nacimiento (4 dígitos): ', (año) => {
                        console.log(`Tu RFC es: ${generaRFC(nombre, apellidoP, apellidoM, dia, mes, año)}`);
                        rl.close();
                    });
                });
            });
        });
    });
});
