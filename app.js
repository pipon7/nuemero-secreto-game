// document.querySelector() trae una variable de otro archivo. Se le agrega un let para poder meterlo en una caja dentro de nuestro js y modificarlo.
// titulo.innerhtml = titulo es el nombre de la caja creada e innerhtml se refiere al tipo de documento que seleccionamos.
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del numero secreto'

// Repito
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un mumero del 1 al 10.'

// function = hacer una accion
function intentoDeUsuario() {
    alert('Click desde el botón.')
}