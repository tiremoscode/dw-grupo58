const obtenerPokemon = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=5'; 

    fetch(url)
        .then(response => response.json())
        .then(resultado => {
            const obtenerPokemones = resultado.results; 
            
            obtenerPokemones.forEach(pokemon => {
                fetch(pokemon.url) 
                    .then(response => response.json())
                    .then(pokemonDetails => {
                        
                        const pokemonName = pokemonDetails.name;
                        const pokemonWeight = pokemonDetails.weight;
                        const pokemonTypes = pokemonDetails.types.map(type => type.type.name).join(', ');
                        console.log(`Nombre: ${pokemonName}, Peso: ${pokemonWeight}, Tipos: ${pokemonTypes}`);
                    })
                    .catch(error => console.log('Error al obtener los detalles del Pokémon: ' + error));
            });
        })
        .catch(error => {
            console.log('Error al obtener el servicio ' + error);
        });
};

obtenerPokemon();

            
