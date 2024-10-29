const devolviendoPokemon = async (index) => {
    const apiurl = `https://pokeapi.co/api/v2/pokemon/${index}`;
    try {
        const response = await fetch(apiurl)
        return await response.json()
    } catch (error) {
        console.log('error al obtener el pokemon');
        return 'error al obtener el pokemon'
    }

    /* const pokemon = fetch(apiurl)
        .then(response => response.json())
        .then(resultado => {
            return resultado.name;
        })
        .catch(error => {
            console.log('error al obtener el pokemon');
            return 'error al obtener el pokemon';
        })
    return pokemon */
}

const inicio = Math.floor(Math.random() * 200);
console.log(`inicia en: ${inicio}`);

for (let index = (inicio === 0 ? 1 : inicio); index <= (inicio + 5); index++) {
    devolviendoPokemon(index)
        .then((pokemon) => {
            const { name, abilities } = pokemon
            const habilidades = abilities.map(habilidad => habilidad.ability.name)
            console.log(`\nSoy ${name}`);
            console.log(`Mis habilidades son: ${habilidades.join(', ')}`);
        })
}