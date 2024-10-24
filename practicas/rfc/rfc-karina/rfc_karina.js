
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//let w;
function crear(name, ap, am, dia, mes, an){
     return  ap + am.substr(0,1) + name.substr(0,1) + an + mes + dia +  'xxx';
    
}

console.log('Bienvenido a mi aplicación para crear tu RFC, por favor ingresa los siguientes datos:');
rl.question('Ingresa tu nombre: ', (name)=>{
    rl.question('Ingresa tu apellido paterno: ', (ap)=>{
      function palabra(w) {
        let regex = /[^aeiou]/gi;
        let vowels = w.replace(regex, "");
        let len =  vowels.length;
        if(len > 1)
          ap= (w[0] + (vowels[0] == w[0] ? vowels[1] : vowels[0]));
}
        console.log(palabra(ap));
        rl.question('Ingresa apellido materno: ', (am)=>{
            rl.question('Ingresa tu día de nacimiento: ', (dia)=>{
                rl.question('Ingresa tu mes de nacimiento con numero: ', (mes)=>{
                    rl.question('Ingresa tu año de nacimiento a dos dígitos: ', (an)=>{
                        let rfc = crear(name, ap, am, dia, mes, an);
                        console.log('Tu RFC es: ' + rfc.toUpperCase());
                        rl.close();
                    });
                });
            });
        });
    });
});