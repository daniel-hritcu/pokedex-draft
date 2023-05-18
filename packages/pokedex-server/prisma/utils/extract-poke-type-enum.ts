import pokedex from '../seed/pokedex.seed.json';

const pokemonTypes: Set<string> = new Set();

for (const pokemon of pokedex) {
  for (const type of pokemon.type) {
    pokemonTypes.add(type);
  }
}

console.log('enum PokemonType {');
for (const type of pokemonTypes) {
  console.log(`\t${type.toUpperCase()}`);
}
console.log(`}`);
