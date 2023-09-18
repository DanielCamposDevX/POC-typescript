import { pokemonRepositories } from "repositories/pokemonRepository";
import { pokemon } from "types/pokemontype";




async function listPokemons() {
    const pokemons = await pokemonRepositories.selectPokemons();
    return pokemons;
}

async function createPokemon(pokemon:pokemon) {
    await pokemonRepositories.insertPokemons(pokemon)
}



export const pokemonServices = { listPokemons , createPokemon }