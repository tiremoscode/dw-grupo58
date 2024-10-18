const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumar(valor1, valor2) {
    return valor1 + valor2;
}

function restar(valor1, valor2) {
    return valor1 - valor2;
}

function multiplicar(valor1, valor2) {
    return valor1 * valor2;
}

function dividir(valor1, valor2) {
    return valor1 / valor2;
}

rl.question('¿Cómo te llamas?', (name) => {
    console.log('Hola ' + name);
    // rl.close();
    rl.question('introduce el primer numero', (valor1) => {
        console.log('el primer numero es ' + valor1);
        rl.question('introduce el segundo numero', (valor2) => {
            console.log('el segundo numero es ' + valor2);
            rl.question('ingresa la operacion que desea: suma, resta, multiplicacion o division', (operacion) => {
                let resultado;
                const num1 = parseInt(valor1);
                const num2 = parseInt(valor2);
                switch (operacion) {
                    case 'suma':
                        resultado = sumar(num1, num2);
                        break;
                    case 'resta':
                        resultado = restar(num1, num2);
                        break;
                    case 'multiplicacion':
                        resultado = multiplicar(num1, num2);
                        break;
                    case 'division':
                        resultado = dividir(num1, num2);
                        break;
                    default:
                        resultado = 'Operación no válida';
                        break;
                }
                console.log('el resultado es ' + resultado);
                rl.close();
            });
        });
    });

});