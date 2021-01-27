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




