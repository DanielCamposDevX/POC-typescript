import { pokemonControllers } from "../controllers/pokemonController";
import { Request, Response, Router } from "express";

const pokemonRoute = Router();


pokemonRoute.get('/pokemon',pokemonControllers.listPokemons)
pokemonRoute.post('/pokemon',pokemonControllers.createPokemon)


export default pokemonRoute;