import { getHeroeById } from "../bases/08-imp-exp"

/*const promesa = new Promise( ( resolve, reject ) => {

    setTimeout(() => {
        //Tarea
        // Importar el 
        const p1 = getHeroeById(2);
        resolve( p1 );
    }, 2000);

});

promesa.then( ( heroe ) => {
    console.log('Heroe', heroe)
})
.catch( console.warn );*/

/*const promesa = new Promise( ( resolve, reject ) => {
    setTimeout(() => {
        //Tarea
        // Importar el 
        const p1 = getHeroeById(2);
        resolve( p1 );
    }, 2000);
});

promesa.then( ( heroe ) => {
    console.log('Heroe', heroe)
})
.catch( console.warn );*/

const getHeroeByIdAsync = ( id ) => {

    return new Promise( ( resolve, reject ) => {
        setTimeout(() => {
            //Tarea
            // Importar el 
            const p1 = getHeroeById( id );
            if ( p1 ) {
                resolve( p1 );
            } else {
                reject( 'No se pudo encontrar el heroe' );
            }
        }, 2000);
    });
}

getHeroeByIdAsync(1)
    .then( console.log )
    .catch( console.warn );
 

