/* 
El operador ternario se utiliza para determinar el número mayor entre a y b. Si a es mayor que b, se devuelve a, de lo contrario, se devuelve b.
 */
const elMayor = (a, b) => (a > b) ? a : b;

console.log(elMayor(20, 15));

/* 
El operador ternario se utiliza para verificar si miembro es true o false. Si miembro es true, se devuelve '2 Dólares', de lo contrario, se devuelve '10 Dólares'.
*/
const tieneMembresio = (miembro) => (miembro) ? '2 Dólares' : '10 Dólares';
console.log(tieneMembresio(true));

/* 
El operador ternario se utiliza para determinar si se debe agregar 'Thor' o 'Loki' al arreglo amigos basado en el valor de amigo. Además, se utiliza una función de flecha para agregar el resultado de (() => 'Nick Fury')() al arreglo, y también se llama a la función elMayor(10, 15) para agregar el resultado al arreglo.
*/
const amigo = false;
const amigos = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    (() => 'Nick Fury')(),
    elMayor(10, 15)
];

console.log(amigos);

// otro uso

/* 
El operador ternario se utiliza para asignar el grado correspondiente a la nota según el rango en el que se encuentre. Se evalúa la nota de mayor a menor, y se asigna el grado correspondiente según la condición. El último valor después de los dos puntos : es el valor por defecto si ninguna de las condiciones anteriores se cumple.
*/
const nota = 65; // A+ A B+
const grado = nota >= 95 ? 'A+' :
    nota >= 90 ? 'A' :
        nota >= 85 ? 'B+' :
            nota >= 80 ? 'B' :
                nota >= 75 ? 'C+' :
                    nota >= 70 ? 'C' :
                        nota >= 65 ? 'D+' :
                            nota >= 60 ? 'D' : 'F';

console.log(nota, grado);

//el operador ternario para simplificar la lógica condicional similar a la estructura "if-else".