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

    const multp = valor1 * valor2;

    console.log(multp);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${multp}`;
}

function dividir() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    console.log(valor1);
    console.log(valor2);

    const divis = valor1 / valor2;

    console.log(divis);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${divis}`;
}