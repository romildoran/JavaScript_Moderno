console.log('Ciclo for tradicional.')

const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman', 'Flash', 'Ciborg']

console.warn('Ciclo for tradicional');
for( let i = 0; i < heroes.length; i++){
    console.log(heroes[i]);
}

console.warn('Ciclo for in');
for (let i in heroes){
    console.log(heroes[i]);
}

console.warn('Ciclo for of');
for (let heroe of heroes){
    console.log(heroe);
}