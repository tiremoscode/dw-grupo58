function holaMundo() {
    console.log('Hola Mundo - Grupo 58');

    var numero1 = 10;
    var numero2 = 20;
    var numero3 = 20;
    var numero4 = 15;

    var suma = numero1 + numero2;
    var resta = numero3 - numero4;
    var mult = numero1 * numero4;
    var div = numero2 / numero1;
    console.log('La suma es ' + suma);
    console.log('La resta es ' + resta);
    console.log('La multiplicación es ' + mult);
    console.log('La división es ' + div);

    // Operadores Lógicos
    var mayor = numero1 > numero2;
    var menor = numero1 < numero2;
    var igual = numero1 == numero2;
    var diferente = numero1 != numero2;
    var mayorigual = numero1 >= numero2;
    var menorigual = numero1 <= numero2;
    console.log('Numero 1 es mayor que numero 2 ' + mayor);
    console.log('Numero 1 es menor que numero 2 ' + menor);
    console.log('Numero 1 es igual a numero2 ' + igual);
    console.log('Numero 1 es diferente a numero2 ' + diferente);
    console.log('Numero 1 es mayor o igual a numero2 ' + mayorigual);
    console.log('Numero 1 es menor o igual a numero2 ' + menorigual);

};