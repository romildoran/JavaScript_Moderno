//pasar informacion por valor y por referencia

let a = 10;
let b = a;

a = 30;
console.log({ a, b });

let juan = { nombre: 'Juan' };
let ana = { ...juan }; // operador de propagación o spread operator, Esto copia las propiedades del objeto juan en el objeto ana, creando así un objeto independiente. Al modificar la propiedad nombre de ana, no afecta al objeto juan.
ana.nombre = 'ana';

console.log({ juan, ana });

//todos los primitivos se pasan por valor y todos los objetos son pasados por referencia

const cambiaNombre = (persona) => {
    persona.nombre = 'Tony';
    return persona;
}

let Peter = { nombre: 'Peter' };
let Tony = cambiaNombre(Peter);

console.log({ Peter, Tony });

//Arreglos

const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('Slice');
const otrasFrutas = frutas.slice();
console.timeEnd('Slice');

console.time('Spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('Spread');

otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas});

// El método 'Slice' puede ser más lento en comparación con el operador spread debido a la complejidad de la función 'slice()' en relación con el operador spread.





