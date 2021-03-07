const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 524524234,
        lat: 343432,
        lng: 23232323
    }
};

console.log( { persona } );
//console.table( persona );


//se compia la referencia de espacio de memoria del objeto
//const persona2 = persona; como no se debe hacer
const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log( persona );
console.log( persona2 );