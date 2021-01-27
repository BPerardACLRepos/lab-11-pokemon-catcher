import { SESSION_POKEDEX } from '../constants.js';
import pokemon from './pokemon.js';


//Local Storage interaction
export function getAndParse(KEY) {
    const retrieved = localStorage.getItem(KEY);
    if (!retrieved) {
        const emptyArray = [];
        return emptyArray;
    } else {
        return JSON.parse(retrieved);
    }
}

export function StringifyAndSet(KEY, array) {
    const stringyArray = JSON.stringify(array);
    localStorage.setItem(KEY, stringyArray);
}

export function searchById(_id, array) {
    for (let item of array) {
        if (item._id === _id) {
            return array.indexOf(item);
        }
    }
    return false;
}


export function updateSessionPokedex(pokemon) {
    const sessionPokedex = getAndParse(SESSION_POKEDEX);
    const update = searchById(pokemon._id, sessionPokedex);

    if (update) {
        console.log(sessionPokedex[update].seen);
        sessionPokedex[update].seen++;
        console.log(sessionPokedex[update].seen);
    } else {
        const newEntry = {};
        newEntry._id = pokemon._id;
        newEntry.name = pokemon.pokebase;
        newEntry.image = pokemon.url_image;
        newEntry.seen = 1;
        newEntry.captured = 0;
        sessionPokedex.push(newEntry);
    }

    StringifyAndSet(SESSION_POKEDEX, sessionPokedex);
}




