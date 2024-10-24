const readline = require('readline');

// Datos del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



// Pedir datos al usuario usando readline
rl.question("Ingresa tu nombre: ", function(nombre) {
    rl.question("Ingresa tu apellido paterno: ", function(apellidoPaterno) {
        rl.question("Ingresa tu apellido materno: ", function(apellidoMaterno) {
            rl.question("Ingresa tu fecha de nacimiento (AAAA-MM-DD): ", function(fechaNacimiento) {
                function generarRFC(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento) {
                    // Convertir todo a mayúsculas
                    nombre = nombre.trim().toUpperCase();
                    apellidoPaterno = apellidoPaterno.trim().toUpperCase();
                    apellidoMaterno = apellidoMaterno.trim().toUpperCase();
                
                    // Función para obtener la primera vocal interna en una cadena
                    function obtenerPrimeraVocal(cadena) {
                        const vocales = ['A', 'E', 'I', 'O', 'U'];
                        for (let i = 1; i < cadena.length; i++) { // Comienza desde el índice 1 (omitimos la primera letra)
                            if (vocales.includes(cadena[i])) {
                                return cadena[i];
                            }
                        }
                        return ''; // Si no hay vocales, devolver una cadena vacía
                    }
                
                    // Verificar si el apellido paterno tiene una vocal después de la primera letra
                    let primeraLetraApellidoPaterno = apellidoPaterno.charAt(0);
                    let segundaLetraApellidoPaterno = obtenerPrimeraVocal(apellidoPaterno);
                
                    // Si no hay vocal, tomar la segunda letra del apellido paterno
                    if (segundaLetraApellidoPaterno === '') {
                        segundaLetraApellidoPaterno = apellidoPaterno.charAt(1);
                    }
                
                    // Coloca las primeras dos letras del RFC (apellidoPaterno)
                    let rfc = primeraLetraApellidoPaterno + segundaLetraApellidoPaterno;
                
                    // Coloca la primera letra del apellidoMaterno
                    rfc += apellidoMaterno.charAt(0);
                
                    // Primera letra del nombre
                    rfc += nombre.charAt(0);
                
                    // Fecha de nacimiento en formato YYMMDD mediante new Date
                    let fecha = new Date(fechaNacimiento);
                    let year = fecha.getFullYear().toString().substring(2, 4);
                    let month = (fecha.getMonth() + 1).toString().padStart(2, '0');
                    let day = (fecha.getDate() +1).toString().padStart(2, '0');
                    rfc += year + month + day;
                
                    return rfc;
                }
                // Generar RFC
                let rfc = generarRFC(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento);
                console.log("Tu RFC es: " + rfc);

                // Cerrar la interfaz
                rl.close();
            });
        });
    });
});
