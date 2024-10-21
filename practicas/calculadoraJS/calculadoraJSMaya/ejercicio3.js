function sumar() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    console.log(valor1);
    console.log(valor2);

    const suma = valor1 + valor2;
    console.log(suma);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${suma}`;
}

function restar() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    console.log(valor1);
    console.log(valor2);

    const resta = valor1 - valor2;
    console.log(resta);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${resta}`;
}

function multiplicar() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    console.log(valor1);
    console.log(valor2);

    const multipli = valor1 * valor2;
    console.log(multipli);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${multipli}`;
}

function division() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    console.log(valor1);
    console.log(valor2);

    const divi = valor1 / valor2;
    console.log(divi);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${divi}`;
}

