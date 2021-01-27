import { getAndParse, searchById, StringifyAndSet, updateSessionPokedex } from './data/data-utils.js';
import staticPokemon from './data/pokemon.js';
import { ENCOUNTER_POPULATION, SESSION_POKEDEX, TURNS } from './constants.js';

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
        encountered.push((wildPokemon.splice(pokemonIndex, 1))[0]);
    }

    wildPokemon = wildPokemon.concat(...holding);

    pokemonEncounterDiv.textContent = '';
    for (let pokemon of encountered) {
        updateSessionPokedex(pokemon);

        const img = document.createElement('img');
        img.src = pokemon.url_image;
        img.alt = pokemon.pokebase;

        img.addEventListener('click', () => {
            const sessionPokedex = getAndParse(SESSION_POKEDEX);
            const update = searchById(pokemon._id, sessionPokedex);
            update.captured++;
            StringifyAndSet(SESSION_POKEDEX, sessionPokedex);

            turns--;
            if (turns > 0) {
                playRound();
            } else {
                window.location = './results/';
            }
        });
        pokemonEncounterDiv.append(img);
    }
}

playRound();