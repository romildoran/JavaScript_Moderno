//ciclos

//while
console.log('While');

const marcasDeCarros = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW'];

let i = 0;

while (i < marcasDeCarros.length) {
    console.log(marcasDeCarros[i]);
    i++; // es igual que decir i = i + 1;
}

//do while
console.log('Do While');

let j = 0;

do {
    console.log(marcasDeCarros[j]);
    j++;
} while (i < marcasDeCarros.length);
