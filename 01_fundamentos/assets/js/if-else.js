//If y Else

let a = 5;

if (a => 10) {          //if (*aqui se espera un valor booleano){}
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}

//console.log('Fin del programa');

const hoy = new Date();
let dia = hoy.getDay();/**/

console.log({ dia });

if (dia === 0) {
    console.log('domingo');
} else if (dia === 1) {
    console.log('lunes');
} else if (dia === 2) {
    console.log('martes');
} else {
    console.log('No es lunes, martes ni domingo...');
}

/* 
= se utiliza para asignar un valor a una variable. Por ejemplo, x = 5; asigna el valor 5 a la variable x.
== se utiliza para comparar dos valores. Compara si los valores son iguales, pero no verifica si los tipos de datos son iguales. , 5 == '5' es verdadero porque ambos valores son iguales numéricamente, aunque uno es un número y el otro es una cadena de texto.
=== se utiliza para una comparación estricta. Compara tanto los valores como los tipos de datos. Por ejemplo, 5 === '5' es falso porque los valores son iguales numéricamente, pero no tienen el mismo tipo de dato. 
 */

dia = 6;

const diasLetras = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miércoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sábado',
}
console.log(diasLetras[dia]);

const diasLetras2 = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado',];
console.log(diasLetras2[dia]);