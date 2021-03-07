//import { heroes } from './data/heroes';
import heroes, { owners } from "../data/heroes";

//console.log( owners );

export const getHeroeById = ( id ) => heroes.find( ( heroe ) =>  ( heroe.id === id ) ? true : false );

//console.log( getHeroeById(2) );

export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => (heroe.owner === owner ) ? true : false );

//console.log( getHeroesByOwner('DC') );



