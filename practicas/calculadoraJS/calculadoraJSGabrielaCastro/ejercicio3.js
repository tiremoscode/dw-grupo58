function sumar() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);
    
    console.info("Datos");
    console.log(valor1);
    console.log(valor2);

    const suma = valor1 + valor2;
    console.info("Este método sirve para sumar");
    console.log(suma);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${suma}`;
}

function resta(){
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    console.info("Datos");
    console.log(valor1);
    console.log(valor2);

    const resta = valor1 - valor2;
    console.info("Este método sirve para restar");
    console.log(resta);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${resta}`;

}

function multp(){
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    console.info("Datos");
    console.log(valor1);
    console.log(valor2);

    const multp = valor1 * valor2;
    console.info("Este método sirve para multiplicar");
    console.log(multp);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${multp}`;

}

function div(){
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    console.info("Datos");
    console.log(valor1);
    console.log(valor2);

    const div = valor1 / valor2;
    console.info("Este método sirve para dividir");
    console.log(div);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${div}`;

}