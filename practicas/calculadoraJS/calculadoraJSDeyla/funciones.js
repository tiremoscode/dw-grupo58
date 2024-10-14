//Funcion para sumar dos valores
function sumar() {
  const valor1 = parseInt(document.getElementById("numero1").value);
  const valor2 = parseInt(document.getElementById("numero2").value);

  console.log(valor1);
  console.log(valor2);

  const suma = valor1 + valor2;
  console.log(suma);

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `Resultado: ${suma}`;
}

//Funcion para restar dos valores
function resta() {
  const valor1 = parseInt(document.getElementById("numero1").value);
  const valor2 = parseInt(document.getElementById("numero2").value);

  console.log(valor1);
  console.log(valor2);

  const resta = valor1 - valor2;
  console.log(resta);

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `Resultado: ${resta}`;
}

//Funcion para multiplicar dos valores
function multiplicacion() {
  const valor1 = parseInt(document.getElementById("numero1").value);
  const valor2 = parseInt(document.getElementById("numero2").value);

  console.log(valor1);
  console.log(valor2);

  const multiplicacion = valor1 * valor2;
  console.log(multiplicacion);

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `Resultado: ${multiplicacion}`;
}

//Funcion para dividir dos valores
function division() {
  const valor1 = parseInt(document.getElementById("numero1").value);
  const valor2 = parseInt(document.getElementById("numero2").value);

  console.log(valor1);
  console.log(valor2);

  if (valor2 === 0) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Error: División por 0`;
  } else {
    const division = valor1 / valor2;
    console.log(division);

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Resultado: ${division}`;
  }
}
