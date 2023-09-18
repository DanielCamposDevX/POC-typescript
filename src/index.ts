import express, { json } from "express";
import pokemonRoute from "./routes/PokemonRoutes";


const app = express();
app.use(json());
app.use(pokemonRoute)


app.listen(5000, () => console.log(`Server is up and running or port 5000`));