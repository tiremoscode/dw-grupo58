const obtenerPersonajesRickAndMorty = () => {
    const url = 'https://rickandmortyapi.com/api/character';

    const array1 = ['a', 'b', 'c'];
    array1.forEach((element) => console.log(element));

    fetch(url)
        .then(response => response.json())
        .then(resultado => {
            // console.log(resultado);
            const obtenerPersonajes = resultado.results;
            //console.log(obtenerPersonajes);

            // obtenerPersonajes.forEach(personaje => console.log(`Nombre: ${personaje.name}, Estatus: ${personaje.status}`));
            for (let i = 0; i < obtenerPersonajes.length; i++) {
                console.log(obtenerPersonajes[i].name + ' Status: ' + obtenerPersonajes[i].status);
            }
        })
        .catch(error => {
            console.log('error al obtener el servicio ' + error);
        });
};

obtenerPersonajesRickAndMorty();