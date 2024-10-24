function sumar() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    console.info('Datos');
    console.log(valor1);
    console.log(valor2);

    console.info('Este metodo sirve para sumar');
    const suma = valor1 + valor2;
    console.log(suma);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Suma: ${suma}`;
}

function restar(){
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    console.log(valor1);
    console.log(valor2);

    console.info('Este metodo sirve para restar');
    const resta = valor1 - valor2;
    console.log(resta);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resta: ${resta}`;
}

function multiplicar(){
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    console.log(valor1);
    console.log(valor2);

    console.info('Este metodo sirve para multiplicar');
    const multiplica = valor1 * valor2;
    console.log(multiplica);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Multiplicación: ${multiplica}`;
}

function dividir(){
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    console.log(valor1);
    console.log(valor2);

    console.info('Este metodo sirve para dividir');
    const divide = valor1 / valor2;
    console.log(divide);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `División: ${divide}`;
}