const obtenerInfoPokemon = (pokemon) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.name); 
        })
        .catch(error => {
            console.log('error ', error);
        });
}
for (let i = 1; i <= 5; i++) {
    obtenerInfoPokemon(i);
}
