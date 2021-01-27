import { getAndParse, StringifyAndSet } from './data/data-utils.js';
import staticPokemon from './data/pokemon.js';
import { ENCOUNTER_POPULATION, TURNS } from './constants.js';

const pokemonEncounterDiv = document.querySelector('#pokemon-encounter-div');
let encountered = [];
let holding = [];
let wildPokemon = staticPokemon;
let turns = TURNS;

function playRound() {

    if (encountered.length > 0) {
        holding = [...encountered];
        encountered = [];
    }

    for (let i = 0; i < ENCOUNTER_POPULATION; i++) {
        const pokemonIndex = Math.floor(Math.random() * wildPokemon.length);
        encountered.push(wildPokemon.splice(pokemonIndex, 1));
    }

    wildPokemon = wildPokemon.concat(...holding);

    for (let pokemon of encountered) {
        const img = document.createElement('img');
        img.src = pokemon[0].url_image;
        pokemonEncounterDiv.append(img);
    }
}

playRound();
playRound();