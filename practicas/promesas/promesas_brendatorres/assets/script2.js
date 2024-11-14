// Buscar datos del pokemón dependiendo de su número o nombre
function buscarPokemon(contenedorNumero) {
    let inputId = `pokemonInput${contenedorNumero}`;
    let nombrePokemon = document.getElementById(inputId).value.trim().toLowerCase();
    let urlApi = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;

    fetch(urlApi)
    .then(response => response.json())
    .then(datosPokemon => mostrarPokemon(datosPokemon, contenedorNumero))
    .catch(() => mostrarError(contenedorNumero));
}

const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
};

// Función para aplicar estilo en la tarjeta
function styleCard(color, contenedorNumero) {
    // Seleccionar la tarjeta específica (card-two o card-three)
    let card = document.querySelector(contenedorNumero === 1 ? ".card-two" : ".card-three");
    card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, transparent)`;
    
    // Establecer color de fondo en elementos de tipo
    card.querySelectorAll(".types span").forEach((typeElement) => {
        typeElement.style.backgroundColor = color;
    });
}

// Mostrar información del Pokémon
function mostrarPokemon(datosPokemon, contenedorNumero) {
    let infoDivId = `pokemonInfo${contenedorNumero}`;
    let infoDiv = document.getElementById(infoDivId);

    // Obtener el tipo principal del Pokémon y el color correspondiente
    let tipoPrincipal = datosPokemon.types[0].type.name;
    const colorFondo = typeColor[tipoPrincipal];

    // Generar contenido de la tarjeta
    infoDiv.innerHTML = `
        <img class="pk-img" src="${datosPokemon.sprites.other["official-artwork"].front_default}">
        <h2 class="pk-name">${datosPokemon.name.toUpperCase()}</h2>
        <div class="p-info">
            <p>${datosPokemon.id}<br> Número</p>
            <p>${datosPokemon.weight / 10} kg<br> Peso</p>
            <p>${datosPokemon.height / 10} m<br> Altura</p>
        </div>
    `;

    // Aplicar estilo con el color temático
    styleCard(colorFondo, contenedorNumero);
}

// Error en búsqueda de Pokémon
function mostrarError(contenedorNumero) {
    let infoDivId = `pokemonInfo${contenedorNumero}`;
    let infoDiv = document.getElementById(infoDivId);

    infoDiv.innerHTML = `
        <p class="pk-ms">Pokémon no encontrado. 
        <br> 
        Intenta con otro nombre o número.</p>
    `;
}

// Mostrar Pokémon inicial
window.onload = function() {
    document.getElementById("pokemonInput1").value = "25";
    buscarPokemon(1);

    document.getElementById("pokemonInput2").value = "151";
    buscarPokemon(2);
};
