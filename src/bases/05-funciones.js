//Funciones en js

/* no recomendado
function saludar( nombre ) {
    return `Hola, ${ nombre }`;
} 
*/ 

const saludar = function( nombre ) {
    return `Hola, ${nombre}`;
}

const saludar2 = ( nombre ) => `Hola ${ nombre }`;


console.log(saludar2('Viviana'));

const getUser = () =>(
    {
        uid: 'ABCD123',
        username: 'El papi1502'
    }
);


function getUsuarioActivo( nombre ) {
    return {
        uid: 'ABC567',
        username: nombre
    }
}

const usuarioActivo = getUsuarioActivo( 'Viviana' );
console.log( usuarioActivo );

const getUsuarioActivo2 = ( username ) 
    => ( { 
            uid: 'ABC567', 
            username 
        });

console.log( getUsuarioActivo2('Viviana2') );