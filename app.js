// document.querySelector() trae una variable de otro archivo. Se le agrega un let para poder meterlo en una caja dentro de nuestro js y modificarlo.
// titulo.innerhtml = titulo es el nombre de la caja creada e innerhtml se refiere al tipo de documento que seleccionamos.
/* ejemplo del fuction de asignarTextoElemento pero NO reducido:
 let parrafo = document.querySelectorAll('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10.'; */

//Variables.
let numeroSecreto = generarNumeroSecreto(); //Esta variable funciona ya que los fuctions no importan en que orden del codigo esten.


// function = hacer una accion
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //getelementbyid para seleccionar un ID de html y el .value es para tomar el valor ingresado
    console.log(numeroSecreto);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', 'Acertaste el número');
    } else if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p', 'El numero secreto es menor');
        }    else {
            asignarTextoElemento('p', 'El numero secreto es mayor')
        }
    return;
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

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10) + 1;
}

asignarTextoElemento('h1', 'Juego del numero secreto');
asignarTextoElemento('p', 'Indica un numero del 1 al 10.');