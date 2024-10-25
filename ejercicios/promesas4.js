const obtenerInfoPokemon = (pokemon) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // console.log('Exito ', data);
            const peso = data.height;
            const nombre = data.name;
            const altura = data.weight;

            const miPokemon = nombre + ' pesa ' + peso + 'kg y tiene ' + altura + ' pies de altura';
            console.log(miPokemon);
        })
        .catch(error => {
            console.log('error ', error);
        });
}

obtenerInfoPokemon('mewtwo');