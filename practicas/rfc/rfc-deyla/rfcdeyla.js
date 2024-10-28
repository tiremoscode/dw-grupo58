const readline = require('readline');

// Crear una interfaz para leer datos desde la terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para obtener las dos primeras letras del apellido paterno
function getFirstTwoLetters(lastName) {
    let foundLetters = [];
    
    foundLetters.push(lastName[0].toUpperCase());
    
    for (let i = 1; i < lastName.length; i++) {
        if (foundLetters.length === 2) break; 
        if (/[AEIOU]/i.test(lastName[i])) {
            foundLetters.push(lastName[i].toUpperCase());
        }
    }
    
    while (foundLetters.length < 2) {
        foundLetters.push('X');  
    }

    return foundLetters.join('');
}

// Función para generar el RFC
function generateRFC(firstLastName, secondLastName, firstName, day, month, year) {
    const firstLastNameLetters = getFirstTwoLetters(firstLastName); 
    
    const secondLastNameLetter = secondLastName[0] ? secondLastName[0].toUpperCase() : 'X';
    const firstNameLetter = firstName[0].toUpperCase(); 


    const formattedYear = year.padStart(2, '0');
    const formattedMonth = month.padStart(2, '0');
    const formattedDay = day.padStart(2, '0');

    const rfc = `${firstLastNameLetters}${secondLastNameLetter}${firstNameLetter}${formattedYear}${formattedMonth}${formattedDay}-XXX`;
    return rfc;
}

// Función para solicitar los datos al usuario
function requestUserData() {
    rl.question('Ingresa tu Nombre o Nombres si es que tienes mas de uno: ', (firstName) => {
        rl.question('Ingresa tu primer apellido (apelido paterno): ', (firstLastName) => {
            rl.question('Ingresa tu segundo apellido (apellido materno): ', (secondLastName) => {
                rl.question('Ingresa tu día de nacimiento (2 dígitos): ', (day) => {
                    rl.question('Ingresa tu mes de nacimiento (2 dígitos): ', (month) => {
                        rl.question('Ingresa tu año de nacimiento (2 dígitos): ', (year) => {
                            // Generar RFC con los datos proporcionados
                            const rfc = generateRFC(firstLastName, secondLastName, firstName, day, month, year);
                            console.log(`Tu rfc es: ${rfc}`);
                            rl.close();
                        });
                    });
                });
            });
        });
    });
}

// Iniciar la solicitud de datos
requestUserData();
