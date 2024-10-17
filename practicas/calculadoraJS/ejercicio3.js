function sumar() {
    const valor1 = parseFloat(document.getElementById('numero1').value);
    const valor2 = parseFloat(document.getElementById('numero2').value);

    console.log(valor1);
    console.log(valor2);

    const suma = valor1 + valor2;
    console.log(suma);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${suma} `;
    
}

function restar() {
    const valor3 = parseFloat(document.getElementById('numero3').value);
    const valor4 = parseFloat(document.getElementById('numero4').value);

    console.log(valor3);
    console.log(valor4);

    const resta = valor3 - valor4;
    console.log(resta);

    const resultado = document.getElementById('resultado2');
    resultado.innerHTML = `Resultado: ${resta} `;
  
}

function dividir() {
    const valor5 = parseFloat(document.getElementById('numero5').value);
    const valor6 = parseFloat(document.getElementById('numero6').value);

    console.log(valor5);
    console.log(valor6);

    const dividir = valor5 / valor6;
    console.log(dividir);

    const resultado = document.getElementById('resultado3');
    resultado.innerHTML = `Resultado: ${dividir} `;
    
}

function mult() {
    const valor7 = parseFloat(document.getElementById('numero7').value);
    const valor8 = parseFloat(document.getElementById('numero8').value);

    console.log(valor7);
    console.log(valor8);

    const mult = valor7 * valor8;
    console.log(mult);

    const resultado = document.getElementById('resultado4');
    resultado.innerHTML = `Resultado: ${mult} `;
    
}


