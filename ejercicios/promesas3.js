const primerPromesa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Primer promesa completado');
        }, 1000);
    })
};

const segundaPromesa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Segunda promesa completada');
        }, 1000);
    });
};

const terceraPromesa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Tercer promesa completada');
        }, 1000);
    });
};

const tareaAsincrona = async () => {
    try {
        const primerResultado = await primerPromesa();
        console.log(primerResultado);

        const segundoResultado = await segundaPromesa();
        console.log(segundoResultado);

        const tercerResultado = await terceraPromesa();
        console.log(tercerResultado);

    } catch (error) {
        console.log('error ', error);
    }
};

tareaAsincrona();