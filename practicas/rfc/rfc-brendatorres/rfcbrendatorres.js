const readline = require('readline');

// Crear una interfaz para leer datos desde la terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para obtener las dos primeras letras del primer apellido
function obtenerLetras(apellido) {
    let letrasEncontradas = [];
    
    // Tomar la primera letra
    letrasEncontradas.push(apellido[0].toUpperCase());
    
    // Buscar la segunda letra (debe ser vocal)
    for (let i = 1; i < apellido.length; i++) {
        if (letrasEncontradas.length === 2) break; // Ya se encontraron dos letras
        if (/[aeiou]/i.test(apellido[i])) {
            letrasEncontradas.push(apellido[i].toUpperCase());
        }
    }
    
    // Asegurarse de que haya dos letras
    while (letrasEncontradas.length < 2) {
        letrasEncontradas.push('X');  // Usar 'X' si no hay suficientes letras
    }

    return letrasEncontradas.join('');
}

// Función para generar el RFC
function generarRFC(primerApellido, segundoApellido, nombre, fechaNacimiento) {
    const letras = obtenerLetras(primerApellido);
    
    const letraSegundoApellido = segundoApellido[0].toUpperCase();
    const letraPrimerNombre = nombre[0].toUpperCase();
    
    const [año, mes, dia] = fechaNacimiento.split('-');
    const ultimosDosDigitosAño = año.slice(-2);
    const mesFormateado = mes.padStart(2, '0');
    const diaFormateado = dia.padStart(2, '0');

    const rfc = `${letras}${letraSegundoApellido}${letraPrimerNombre}${ultimosDosDigitosAño}${mesFormateado}${diaFormateado}XXX`;
    return rfc;
}

// Función para solicitar los datos al usuario
function solicitarDatos() {
    rl.question('Ingresa el primer apellido: ', (primerApellido) => {
        rl.question('Ingresa el segundo apellido: ', (segundoApellido) => {
            rl.question('Ingresa el primer nombre: ', (nombre) => {
                rl.question('Ingresa la fecha de nacimiento (YYYY-MM-DD): ', (fechaNacimiento) => {
                    const rfc = generarRFC(primerApellido, segundoApellido, nombre, fechaNacimiento);
                    console.log(`Tu RFC es: ${rfc}`);
                    rl.close();
                });
            });
        });
    });
}

// Iniciar la solicitud de datos
solicitarDatos();