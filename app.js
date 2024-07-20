// document.querySelector() trae una variable de otro archivo. Se le agrega un let para poder meterlo en una caja dentro de nuestro js y modificarlo.
// titulo.innerhtml = titulo es el nombre de la caja creada e innerhtml se refiere al tipo de documento que seleccionamos.
/* ejemplo del fuction de asignarTextoElemento pero NO reducido:
 let parrafo = document.querySelectorAll('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10.'; */

//Variables.
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
console.log(numeroSecreto);

// function = hacer una accion
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //getelementbyid para seleccionar un ID de html y el .value es para tomar el valor ingresado

    if (numeroDeUsuario === numeroSecreto) { //acerto
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    } else if (numeroDeUsuario > numeroSecreto) { //no acerto
        asignarTextoElemento('p', 'El numero secreto es menor');
    } else {
            asignarTextoElemento('p', 'El numero secreto es mayor')
    }
    intentos++;
    limpiarCaja();
    return;
}

function limpiarCaja() {
    let valorEscrito = document.querySelector('#valorUsuario').value = '';
    /* valorEscrito.value = ''; esto es igual al cod d arriba pero sin el .value = ''; */
}

/* En este caso fuction crea la variable asignarTextoElemento 
para que esta pueda ser reutilizada cada vez que querramos, en los
() se crean dos cajas llamadas elemento y texto las cuales abajo
 con el document.queryselector y el elemnto.innerhtml hacen que
 cada vez que se utilice la variable asignarTextoElemento, dentro
 de los () solo debamos agregar el document.queryselector que 
 querramos seleccionar y el inner.html en forma de texto que querramos */
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', 'Indica un numero del 1 al 10.');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10) + 1;
    //Si el numero generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    }   else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado
    }
}

function reiniciarJuego(){
    // limpiar caja
    limpiarCaja();
    // generar nuevo num aleatorio
    // reiniciar el numero de intentos
    // indicar el mensaje de inicio
    condicionesIniciales();
    // deshabilitar el boton de reinciar juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
