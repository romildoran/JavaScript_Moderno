function saludar(nombre) {
    //console.log(arguments);
    //console.log('Hola ' + nombre);
    return [1,2];

    //Este codigo no se va a ejecutar por estar despues de un return dentro de la funcion
    console.log('Este es un codigo que va despues del return');
}

const saludar2 = function (nombre) {
    console.log('nombre ' + nombre);
}

//Esto es una definicion de flecha anonima
const saludarFlecha = () => {
    console.log('Hola flecha');
}

const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre);
}

const retornoDeSaludar = saludar('Fernando', 40, true, 'Costa Rica'); //1

saludar('Fernando', 40, true, 'Coasta Rica');

saludarFlecha();
saludarFlecha2('Melissa');

function sumar(a, b) {
    return a + b;
}

const sumar2 = (a, b) => {
    return (a + b);
}

console.log(sumar(1, 2));
console.log(sumar2(1, 2));

const sumar3 = (a, b) => a + b;
console.log(sumar3(1, 2));


function getAleatorio() {
    return Math.random();
}
console.log(getAleatorio());

const getAleatorio2 = () => Math.random();
console.log(getAleatorio2());