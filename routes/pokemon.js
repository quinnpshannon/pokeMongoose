import express from 'express'
import Pokemon from "../models/Pokemon.js"


/* 
    BASE URL:
    http://localhost:PORT/api/pokemon
*/

const router = express.Router();

/*
    a Basic get route to get ALL the Pokemon
    Things to add:
    optional parameters to filter the pokemon.
        types?
        stats?
*/
router.get("/", async (req, res) => {
    const response = await Pokemon.find();
    res.json(response)
})

/* 
    Things to add:
    get route to find a specific pokemon by ID or Name
    get route to find All pokemon that have a specific type
*/


/*
    a Basic POST route to add a pokemon to the database
    Things to add:
    Try Catch to send useful feedback.
    Not adding a Pokemon if it is already in the Database
        Maybe by checking the nDex Value?
*/ 
router.post("/", async (req, res)=>{
    const response = await Pokemon.create(req.body)
    res.json(response)
})

/*
    a Basic DELETE route to remove pokemon from the database
    But it doesn't actually delete anything just yet. 
    Try to add Delete functionality to remove individual pokemon.
    You should be able to pass either the _id or the nDex value to delete it
*/
router.delete("/:id", (req, res)=>{
    res.status(500).send("Delete not currently Supported...")
})

/*
    a Basic PATCH route to edit pokemon in the database
    But it doesn't actually edit anything just yet. 
    Try to add patch functionality to edit individual pokemon.
    Pass the _id into the params to be able to edit the specific pokemon
*/
router.patch("/:id", (req, res)=>{
    res.status(500).send("Patch not currently Supported...")
})

/*
    But that's not all! What else do you think might be useful?
    Maybe you want to add different patterns to connect to the routes!
    Maybe you want to add more functionality!
*/

export default router