const obtenerPokemon = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=5';
    //?limit=5 es para obtener solo 5 pokemones

    fetch(url)
        .then(response => response.json())
        .then(resultado => {

            const obtenerPokemones = resultado.results; /* obtenemos los pokemones de la lista, 
            se imprime esto:
            [ { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
              { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
              { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' },
              { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
              { name: 'charmeleon', url: 'https://pokeapi.co/api/v2/pokemon/5/' } ]
            */
            obtenerPokemones.forEach(pokemon => {
            //por cada pokemon de la lista, obtenemos los detalles de cada uno  

                fetch(pokemon.url) //obtenemos la url de cada pokemon del arreglo de objetos
                    .then(response => response.json())
                    .then(detalles => {
                        console.log('-------------------');
                        console.log('ID:', detalles.id);
                        console.log('Nombre:', detalles.name);
                        console.log('Altura:', detalles.height);
                        console.log('Peso:', detalles.weight);
                        console.log('Habilidades:', detalles.abilities.map(habilidad => habilidad.ability.name).join(', '));
                        console.log('-------------------');
                    })
                    .catch(error => {
                        console.log('Error al obtener detalles del Pokémon:', error);
                    });
            });
        })
        .catch(error => {
            console.log('Error al obtener la lista de Pokémon:', error);
        });
}

obtenerPokemon();
