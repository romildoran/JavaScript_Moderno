let personaje = {
    nombre: 'Tony stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark 1', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'Ultima-pelicula': 'Infinity War', //no se aconseja nombrar variables de esta forma
};

console.log(personaje);
console.log('Nombre: ', personaje.nombre); 
console.log('Edad: ', personaje.edad); 
console.log('Coords: ', personaje.coords); 
console.log('Lat: ', personaje.coords.lat); 

console.log('No. de trajes: ', personaje.trajes.length); //imprime la cantidad de elementos en el array
console.log('No. de trajes: ', personaje.trajes[personaje.trajes.length - 1]); //imprimer el ultimo elemento del array, no improta que tan largo sea el array

const x = 'vivo';
console.log('Vivo: ', personaje[x]);
console.log('Ultima pelicula: ', personaje['Ultima-pelicula']);