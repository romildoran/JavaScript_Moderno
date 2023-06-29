/* 
Los dias entre semana abrimos a las 9,
Los fines de semana abrimos a las 11. 
*/

//Entre a un sitio web para consultar si está abierto hoy.

const dia = 1;
const horaActual = 10;

let horaApertura;
let mensaje; //Esta abierto, Esta cerrado, hoy abrimos a las xx.

/* 
if (dia === 0 || dia === 6) {
    console.log('Fin de semana');
    horaApertura = 9;
} else {
    console.log('Día entre semana');
    horaApertura = 11;
}

if (horaActual => horaApertura) {
    mensaje = 'Está abierto';
} else {
    mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`;
}

console.log({ horaApertura, mensaje }); 
*/

//operador ternario:
console.warn('Operador Ternario:')
horaApertura = ([0, 6].includes(dia)) ? 9 : 11;

mensaje = (horaActual => horaApertura) ? 'Esta abierto':`Está cerrado, hoy abrimos a las ${horaApertura}`;
console.log({ horaApertura, mensaje });
