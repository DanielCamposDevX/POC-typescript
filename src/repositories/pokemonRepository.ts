import { QueryResult } from "pg"
import { db } from "../database/dbconnection"
import { pokemon } from "types/pokemontype";




async function selectPokemons():Promise<pokemon[]> {
    const pokemons:QueryResult = await db.query('SELECT * FROM pokemons')
    return pokemons.rows;
}

async function insertPokemons(pokemon:pokemon){
    await db.query('INSERT INTO pokemons (name,type) VALUES($1,$2)'[pokemon.name,pokemon.type])
}




export const pokemonRepositories = { selectPokemons , insertPokemons }