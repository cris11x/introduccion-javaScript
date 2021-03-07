

const nombre = 'Cristian';
const apellido = 'Fajardo';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido } ${ 1+1 }`;
console.log(nombreCompleto);


function getSaludo( nombre = 'DIANA') {
    return 'hola ' + nombre;
}

console.log(`este en un texo ${ getSaludo( 'cristian' ) }`);