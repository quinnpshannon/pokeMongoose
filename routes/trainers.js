import express from 'express'
import Trainer from "../models/Trainer.js"

const router = express.Router();

/* 
    BASE URL:
    http://localhost:PORT/api/trainer
*/

/*
    a Basic get route to get ALL the Trainers
    Things to add:
    optional parameters to filter.
        Levels?
        Number of Pokemon?
        Pokemon Types?
        Region?
*/
router.get("/", async (req, res) => {
    const response = await Trainer.find();
    res.json(response)
})

/* 
    Things to add:
    get route to find a specific Trainer by ID or Name
    get route to find All Gym Leaders
*/


/*
    a Basic POST route to add a Trainer to the database
    Things to add:
    Try Catch to send useful feedback.
    Not adding a Trainer if it is already in the Database
        Maybe by checking the Name and Region?
*/ 
router.post("/", async (req, res)=>{
    const response = await Trainer.create(req.body)
    res.json(response)
})

/*
    a Basic DELETE route to remove a Trainer from the database
    But it doesn't actually delete anything just yet. 
    Try to add Delete functionality to remove individual trainer.
    You should pass the _id in the route parameter.
*/
router.delete("/:id", (req, res)=>{
    res.status(500).send("Delete not currently Supported...")
})

/*
    a Basic PATCH route to edit a Trainer in the database
    But it doesn't actually edit anything just yet. 
    Try to add patch functionality to edit individual Trainers.
    Pass the _id into the params to be able to edit the specific Trainer

    Things to add:
    Make sure the Trainer doesn't have more than 6 pokemon when you add a pokemon
    Make sure the Trainer has at LEAST one Pokemon
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