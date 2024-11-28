const fetch = require('node-fetch'); 

function obtenerPokemones() {
    return new Promise((resolve, reject) => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=5')
            .then((response) => {
                if (!response.ok) {
                    reject('Error al obtener los datos de la API');
                }
                return response.json();
            })
            .then((data) => {
                resolve(data.results); 
            })
            .catch((error) => {
                reject('Error en la conexión con la API: ' + error.message);
            });
    });
}


obtenerPokemones()
    .then((pokemones) => {
        console.log('Lista de Pokémon:');
        pokemones.forEach((pokemon, index) => {
            console.log(`${index + 1}. ${pokemon.name} - ${pokemon.url}`);
        });
    })
    .catch((error) => {
        console.error(error);
    });
