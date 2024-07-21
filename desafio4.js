// 1
let listaGenerica = []; 
// 2
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
// 3
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');
// 4
console.log(lenguajesDeProgramacion);
// 5
console.log(lenguajesDeProgramacion.reverse()); 
// 6
function calcularMedia(listaPromedio) {
    if (listaPromedio.length === 0) {
        return 0;
    }
    let suma = 0; //Esta variable se usará para acumular la suma de los elementos de la lista.
    for (var i = 0; i < listaPromedio.length; i++) {
    suma += listaPromedio[i];
    }

    return suma / listaPromedio.length;
}

let numeros = [50, 100, 150, 200, 250, 300, 350];
let promedio = calcularMedia(numeros);
console.log(`El promedio es ${promedio}`);
// 7
function numerosGrandes(numeritos) {
    if (numeritos.length === 0) {
        console.log('la lista esta vacia');
    }
    let maximo = Math.max(...numeritos); // El operador spread (...) se usa para pasar los elementos del array como argumentos individuales
    let minimo = Math.min(...numeritos);
    console.log(`El numero mas grande es ${maximo}`);
    console.log(`El numero mas chico es ${minimo}`);
    return;
}

let listaNumeros = [80, 10, 90, 120, 30, 45];
numerosGrandes(listaNumeros);
// 8
function sumaTotal(listita) {
    if (listita.length === 0) {
        return 0;
    }
    let sumaNumeros = 0;
    for(var i = 0; i < listita.length; i++) {
        sumaNumeros += listita[i];
    }
    return sumaNumeros;
}

let numerosSumar = [90, 70, 100, 150, 700, 57, 66];
let resultado = sumaTotal(numerosSumar);
console.log(`El resultado de la suma de la lista es ${resultado}`);