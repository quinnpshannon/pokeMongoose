import express from 'express'
import Pokemon from "../models/Pokemon.js"


/* 
    BASE URL:
    http://localhost:PORT/api/pokemon
*/

const router = express.Router();

router.get("/", async (req, res) => {
    const response = await Pokemon.find();
    res.json(response)
})

router.post("/", async (req, res)=>{
    const response = await Pokemon.create(req.body)
    res.json(response)
})


export default router