let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'intento';
let maximosIntentos = 3;

let numeroMaximo = parseInt(prompt("Ingresa el numero limite para jugar"))
let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;

while (numeroSecreto != numeroUsuario) {
   
    numeroUsuario = parseInt(prompt(`Dame un numero entre 1 y ${numeroMaximo}`))
    console.log(numeroMaximo)
    console.log(typeof(numeroUsuario))
    console.log(numeroSecreto)

    //-VARIABLES-
    //CONS
    //LET
    //VAR3

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste el numero, el numero es: ${numeroSecreto} y lo encontraste en ${intentos} ${intentos > 1 ? 'intentos' : 'intento'}` );
    }
    else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor')
        }
        else {
            alert('El numero secreto es mayor')
        }
        //alert('Numero incorrecto')
    }
    intentos = intentos + 1;
    //formas de hacer lo de arriba
    //intentos++;
    //intentos += 1;
    //palabraVeces = 'intentos'
    if(intentos > 3){
        alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`)
        break;
    }
}



