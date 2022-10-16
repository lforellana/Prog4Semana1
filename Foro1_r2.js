// Numero Primo
const numero = parseInt(prompt=2);
let Primo = true;

//
if (numero === 1) {
    console.log("1 no es numero primo.");
}

// mayor a 1
else if (numero > 1) {

    
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            Primo = false;
            break;
        }
    }

    if (Primo) {
        console.log(`${numero} es un numero primo`);
    } else {
        console.log(`${numero} no es un numero primo`);
    }
}

// numero menor 1
else {
    console.log("El numero no es primo.");
}