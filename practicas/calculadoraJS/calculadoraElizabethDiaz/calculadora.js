function sumar() {
    const num1 = parseFloat(document.getElementById('valor1').value);
    const num2 = parseFloat(document.getElementById('valor2').value);
    document.getElementById('resultadoSuma').textContent = `Resultado: ${num1 + num2}`;
}

function restar() {
    const num1 = parseFloat(document.getElementById('valor3').value);
    const num2 = parseFloat(document.getElementById('valor4').value);
    document.getElementById('resultadoResta').textContent = `Resultado: ${num1 - num2}`;
}

function dividir() {
    const num1 = parseFloat(document.getElementById('valor5').value);
    const num2 = parseFloat(document.getElementById('valor6').value);
    const resultado = num2 !== 0 ? (num1 / num2) : "Error: División por cero";
    document.getElementById('resultadoDivision').textContent = `Resultado: ${resultado}`;
}

function multiplicar() {
    const num1 = parseFloat(document.getElementById('valor7').value);
    const num2 = parseFloat(document.getElementById('valor8').value);
    document.getElementById('resultadoMultiplicacion').textContent = `Resultado: ${num1 * num2}`;
}