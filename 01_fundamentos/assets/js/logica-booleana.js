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

