// Arreglos
// Es una estructrua de dato
// que nos va a permitir almacenar muktiples valores dentro de una sola variable
// por ejemplo números, cadenas, ojetos, otros arreglos 

// Estructura base de un arreglo
// nuestra variable y dentro de ella va a ir información, 
// irá separada por una coma

// característica
// indices. desde el indice número 0
// el primer elemento en en la posición 0.
// dinámico. Podemos ir agregando o eliminando elementos de manera fácil y el tamaño puede cambiar
// a lo largo del tiempo
// multidimensional. arreglo de arreglos.

// crear un nuevo arreglo

// Usando la notación de corchetes
const alumnasConDisfraz = ['Diana Vergara', 'Yoreley', 'Liliana', 'Cristel', 'Ximena Padrón', 'Ximena Tores', 'Natalia', 'Fati', 'Elizabeth'];

// Usando un constructor Array.
const frutasArray = new Array('melón', 'sandía', 'kiwi');

console.log(alumnasConDisfraz);
console.log(frutasArray);

// Tamién puedo declarar un arreglo vacio
const vacio = [];
const vacioConConstructor = new Array();
console.log(vacioConConstructor);

const frutas = ['Manzana', 'Plátano', 'Naranja', 'Melón'];
console.log(frutas);
console.log(frutas[1]);

// modificar un elemento
frutas[1] = 'Kiwi';
console.log(frutas);

// Métodos

// push. agrega uno o más elementos al final del arreglo y nos devuelve el arreglo
// con la nueva información
frutas.push('Mango');
console.log(frutas);

// pop. Eliminar el último elemento del arreglo y nos lo devuelve.
const frutaEliminada = frutas.pop();
console.log(frutaEliminada);
console.log(frutas);

// shift. Elimina el primer elemento de nuestro areglo y nos lo devuelve.
const primeraFruta = frutas.shift();
console.log(primeraFruta);
console.log(frutas);

// unshift. Agrega uno o más elementos al principio del arreglo y devolver
// un nuevo arreglo.
frutas.unshift('Fresa');
console.log(frutas);

// concat. Combina dos o más arreglos y devuelve un nuevo arreglo.
const otrasFrutas = ['Sandía', 'Piña'];
const todasMisFrutas = frutas.concat(otrasFrutas);
console.log(todasMisFrutas);

// slice. Devolver una copia superficial de una porción de un arreglo como un nuevo arreglo;
const algunasFrutas = frutas.slice(1, 3);
console.log(algunasFrutas);


// splice. Cambia el contenido de un arreglo eliminando elementos existentes o agregando nuevos elmentos.
// Elimina 1 elemento en el indice 1 y en el agrega la fruta llamada Mora.
frutas.splice(1, 2, 'Mora');
console.log(frutas);

// forEach. Ejecuta una función proporcionada una vez por cada elemento de mi arreglo.
frutas.forEach((fruta) => {
    console.log(fruta);
});

// map. Crea un nuevo arreglo con los resulados de aplicar una función a cada elemento de mi arreglo.
const frutasEnMayusculas = frutas.map((fruta) => fruta.toUpperCase());
console.log(frutasEnMayusculas);

// filter. Crea un nuevo arreglo con todos los elementos que cumplan una condición dada en la función.
const frutaFiltrada = frutas.filter((fruta) => fruta.length > 4);
console.log(frutaFiltrada);

// find. Devolver el primer elemento que cumpla con la condición dada en una función.
const frutaEncontrada = frutas.find((fruta) => fruta.startsWith('F') || fruta.startsWith('f'));
console.log(frutaEncontrada);

const preguntaXimena = frutas.filter((fruta) => fruta.startsWith('F'));
console.log(preguntaXimena);

// Capacidad de Almacenamiento
// Tamaño Teórico
// JS puede manejar arreglos de hasta 2 con exponente a la 53-1 (52)

// Límite Práctico
// El entorno en el cual voy a procear la ejecución de mi aplicación.