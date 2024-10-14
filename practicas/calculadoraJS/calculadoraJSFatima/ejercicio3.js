function obtenerValores() {
    const valor1 = parseInt(document.getElementById('valor1').value);
    const valor2 = parseInt(document.getElementById('valor2').value);
    return { valor1, valor2 };
}


function sumar() {
    const { valor1, valor2 } = obtenerValores();
    
    console.table({ valor1, valor2 });
    const suma = valor1 + valor2;
    console.log('%cResultado de la suma: ' + suma, 'color:orange; font-weight: bold');

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado de la suma: ${suma}`;
}

function restar(){
    const { valor1, valor2 } = obtenerValores();
    console.table({ valor1, valor2 });
    const resta = valor1 - valor2;
    console.log('%cResultado de la resta: ' + resta, 'color:red; font-weight: bold');

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado de la resta: ${resta}`;
}

function multiplicar(){
    const { valor1, valor2 } = obtenerValores();
    console.table({ valor1, valor2 });
    const multiplicacion = valor1 * valor2;
    console.log('%cResultado de la multiplicación: ' + multiplicacion, 'color:yellow; font-weight: bold');

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado de la multiplicación: ${multiplicacion}`;
}

function dividir() {
    const { valor1, valor2 } = obtenerValores();
    console.table({ valor1, valor2 });

    // Verificar si valor2 es 0 para evitar división por cero
    if (valor2 === 0) {
        console.log('%cNo se puede dividir entre 0', 'color:red; font-weight: bold');
        document.getElementById('resultado').innerHTML = 'Error: No se puede dividir entre 0';
    } else {
        const division = valor1 / valor2;
        console.log('%cResultado de la división: ' + division, 'color:green; font-weight: bold');
        document.getElementById('resultado').innerHTML = `Resultado de la división: ${division}`;
    }
}
