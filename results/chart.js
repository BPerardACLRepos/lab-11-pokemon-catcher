import { SESSION_POKEDEX } from "../constants.js";

const ctx = document.querySelector('#pokedex-chart').getContext('2d');

const pokedexData = localStorage.getItem(SESSION_POKEDEX);
const pokedex = JSON.parse(pokedexData);

const labels = [];
const seen = [];
const captured = [];

for (let pokemon of pokedex) {
    labels.push(pokemon.name);
    seen.push(pokemon.seen);
    captured.push(pokemon.captured);
}

console.log(labels, seen, captured);


const data = {
    labels: labels,
    datasets: [{
        label: "Captured",
        backgroundColor: "grey",
        data: captured

    }, {
        label: "Seen",
        backgroundColor: "pink",
        data: seen
    }]
};

var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                }
            }]
        }
    }
});