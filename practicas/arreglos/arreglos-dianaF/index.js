const POKEMONS = [
    {
        id: 1,
        name: "Gengar",
        type: "Fantasma/Veneno",
        description: "Un Pokémon siniestro que acecha en las sombras. Se dice que puede robar la vida de sus víctimas con su lengua",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"
    },
    {
        id: 2,
        name: "Dragonite",
        type: "Dragón/Volador",
        description: "Un Pokémon bondadoso que surca los cielos. A pesar de su apariencia intimidante, ayuda a los marineros perdidos",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png"
    },
    {
        id: 3,
        name: "Gardevoir",
        type: "Psíquico/Hada",
        description: "Puede prever el futuro usando sus poderes psíquicos. Protegerá a su entrenador incluso a costa de su vida",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png"
    },
    {
        id: 4,
        name: "Lucario",
        type: "Lucha/Acero",
        description: "Puede detectar y manipular el aura. Su poder de combate es excepcional tanto a corta como a larga distancia",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png"
    },
    {
        id: 5,
        name: "Umbreon",
        type: "Siniestro",
        description: "Sus anillos brillan en la oscuridad. Evolucionó gracias a la exposición a los rayos de la luna",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png"
    }
];

// Función para buscar un Pokémon en la PokeAPI
async function buscarPokemon(nombre) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`);
        const data = await response.json();
        return data.sprites.front_default;
    } catch (error) {
        console.error('Error al buscar el Pokémon:', error);
        return null;
    }
}

// Función para buscar sugerencias de Pokémon
async function buscarSugerencias(busqueda) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10000`);
        const data = await response.json();
        
        return data.results
            .filter(pokemon => pokemon.name.includes(busqueda.toLowerCase()))
            .slice(0, 5); // Limitamos a 5 sugerencias
    } catch (error) {
        console.error('Error al buscar sugerencias:', error);
        return [];
    }
}

// Función para manejar la selección de sugerencias
async function seleccionarPokemon(nombre) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        const data = await response.json();
        
        document.getElementById('pokemonName').value = nombre;
        document.getElementById('sugerencias').innerHTML = '';
        
        // Autocompletar el tipo
        const tipos = data.types.map(t => t.type.name).join('/');
        document.getElementById('pokemonType').value = tipos.charAt(0).toUpperCase() + tipos.slice(1);
        
        // Guardar el sprite para usarlo después
        document.getElementById('pokemonSprite').value = data.sprites.front_default;
    } catch (error) {
        console.error('Error al seleccionar Pokémon:', error);
    }
}

// Actualizar el HTML para incluir el campo oculto del sprite y el contenedor de sugerencias
function actualizarHTML() {
    const formContainer = document.querySelector('.form-container');
    
    // Agregar campo oculto para el sprite
    const spriteInput = document.createElement('input');
    spriteInput.type = 'hidden';
    spriteInput.id = 'pokemonSprite';
    formContainer.appendChild(spriteInput);
    
    // Agregar contenedor de sugerencias
    const sugerenciasDiv = document.createElement('div');
    sugerenciasDiv.id = 'sugerencias';
    sugerenciasDiv.className = 'sugerencias';
    formContainer.insertBefore(sugerenciasDiv, document.getElementById('pokemonType').parentNode);
    
    // Agregar evento input al campo de nombre
    const nameInput = document.getElementById('pokemonName');
    nameInput.addEventListener('input', async (e) => {
        const busqueda = e.target.value.trim();
        const sugerenciasDiv = document.getElementById('sugerencias');
        
        if (busqueda.length < 2) {
            sugerenciasDiv.innerHTML = '';
            return;
        }
        
        const sugerencias = await buscarSugerencias(busqueda);
        
        sugerenciasDiv.innerHTML = sugerencias.map(pokemon => `
            <div class="sugerencia" onclick="seleccionarPokemon('${pokemon.name}')">
                ${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </div>
        `).join('');
    });
}

// Función para agregar Pokémon actualizada
async function agregarPokemon() {
    const nameInput = document.getElementById('pokemonName');
    const typeInput = document.getElementById('pokemonType');
    const descriptionInput = document.getElementById('pokemonDescription');
    const spriteInput = document.getElementById('pokemonSprite');
    
    const name = nameInput.value.trim();
    const type = typeInput.value.trim();
    const description = descriptionInput.value.trim();
    const sprite = spriteInput.value;
    
    if (name && type && description && sprite) {
        const nuevoPokemon = {
            id: Date.now(),
            name: name,
            type: type,
            description: description,
            sprite: sprite
        };
        
		// POKEMONS.push(nuevoPokemon);
        POKEMONS.unshift(nuevoPokemon);
        
        // Limpiar inputs
        nameInput.value = '';
        typeInput.value = '';
        descriptionInput.value = '';
        spriteInput.value = '';
        document.getElementById('sugerencias').innerHTML = '';
        
        mostrarPokemons();
    } else {
        alert('Por favor, selecciona un Pokémon válido de la lista de sugerencias');
    }
}

// Función para editar Pokémon
function editarPokemon(id) {
    const pokemon = POKEMONS.find(p => p.id === id);
    if (pokemon) {
        const nuevoNombre = prompt('Nombre del Pokémon:', pokemon.name);
        const nuevoTipo = prompt('Tipo del Pokémon:', pokemon.type);
        const nuevaDescripcion = prompt('Descripción del Pokémon:', pokemon.description);
        
        if (nuevoNombre !== null && nuevoTipo !== null && nuevaDescripcion !== null) {
            pokemon.name = nuevoNombre.trim();
            pokemon.type = nuevoTipo.trim();
            pokemon.description = nuevaDescripcion.trim();
            mostrarPokemons();
        }
    }
}

// Función para eliminar Pokémon
function eliminarPokemon(id) {
    const indice = POKEMONS.findIndex(pokemon => pokemon.id === id);
    if (indice !== -1) {
        if (confirm('¿Estás seguro de que deseas liberar este Pokémon?')) {
            POKEMONS.splice(indice, 1);
            mostrarPokemons();
        }
    }
}

// Función para mostrar los Pokémon
function mostrarPokemons() {
    const pokemonList = document.getElementById('pokemonList');
    pokemonList.innerHTML = '';
    
    POKEMONS.forEach((pokemon, index) => {
        const li = document.createElement('li');
        li.className = 'pokemon-card';
        li.style.animationDelay = `${index * 0.1}s`;
        
        const tipoBase = pokemon.type.split('/')[0];
        
        li.innerHTML = `
            <div class="pokemon-info">
                <img src="${pokemon.sprite}" alt="${pokemon.name}" class="pokemon-sprite">
                <h3>${pokemon.name}</h3>
                <span class="pokemon-type" data-type="${tipoBase}">${pokemon.type}</span>
                <p class="pokemon-description">${pokemon.description}</p>
                <div class="pokemon-actions">
                    <button class="btn-edit" onclick="editarPokemon(${pokemon.id})">Editar</button>
                    <button class="btn-delete" onclick="eliminarPokemon(${pokemon.id})">Liberar</button>
                </div>
            </div>
        `;
        pokemonList.appendChild(li);
    });
}

// Agregar los estilos necesarios
const styles = `
    .sugerencias {
        position: absolute;
        background: white;
        border-radius: 8px;
        max-height: 200px;
        overflow-y: auto;
        margin-top: 5px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 1000;
    }

    .sugerencia {
        padding: 0.8rem 1rem;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .sugerencia:hover {
        background-color: #f0f0f0;
    }

    .form-group {
        position: relative;
    }
`;

// Agregar los estilos al documento
const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

// Inicializar cuando el documento esté listo
document.addEventListener('DOMContentLoaded', () => {
    mostrarPokemons();
    actualizarHTML();
});
