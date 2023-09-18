import { Request, Response } from "express";
import { pokemonServices } from "services/pokemonServices";
import { pokemon } from "types/pokemontype";


async function listPokemons(req: Request, res: Response) {
    const pokemons = await pokemonServices.listPokemons();
    res.status(200).send(pokemons);
}


async function createPokemon(req: Request, res: Response) {
    const pokemon = req.body as pokemon
    await pokemonServices.createPokemon(pokemon);
    return res.status(201).send('Criado!')
}



export const pokemonControllers = { listPokemons ,createPokemon }