const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negacion');
console.log(true);//true
console.log(!true);//false
console.log(!false);//true
// La negación, representada por el símbolo !, transforma un valor booleano en su opuesto.
console.log(!regresaFalse());//true

// operador 'And' o '&&'

console.warn('And'); //retorna true si todos los valores son verdaderos
console.log(true && true);//true
console.log(true && !false);//true

console.log('=========');
console.log(regresaFalse() && regresaTrue()); //false
console.log(regresaTrue() && regresaFalse()); //false

console.log('==== && =====');
regresaFalse() && regresaTrue(); //false

console.log('4 condiciones ', true && true && true && false);//false


// or ||
console.warn('Or');
console.log(true || false);
console.log(false || false);

console.log(regresaTrue() || regresaFalse());

console.log('4 condiciones ', true || true || true || false);//true

//Asignaciones con operadores

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;

console.log({ a1, a2, a3, a4, a5 });

if (regresaFalse() && regresaTrue() && (true || false || true)) {
    console.log('Hacer algo');
} else {
    console.log('Hacer otra cosa');
}
