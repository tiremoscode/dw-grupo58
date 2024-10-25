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

primerPromesa()
    .then(result => {
        console.log(result);
        return segundaPromesa();
    })
    .then(result => {
        console.log(result);
        return terceraPromesa();
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log('error ', error);
    });