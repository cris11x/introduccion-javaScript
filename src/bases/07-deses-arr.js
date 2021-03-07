const personajes = ['Goku','Vegeta','Trunks'];
const [ , , p3 ] = personajes;
console.log( p3 );

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros);

//tarea
const userState = ( valor ) => {
    return [ valor, () => { console.log('Hola mundo') }];
}

//Tarea
//1. el primer valor de arr se llamara nombre
//2. se llamara setNombre
const arr = userState( 'Goku' );

const [ nombre, setNombre ] = userState( 'Krilin' );

console.log(nombre);
setNombre();

