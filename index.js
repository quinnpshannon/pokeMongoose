import 'dotenv/config'
import express from 'express'
import connectDB from './db.js'
import pokemonRoutes from './routes/pokemon.js'
import trainerRoutes from './routes/trainers.js'
import typeRoutes from './routes/types.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use("/api/pokemon", pokemonRoutes)
app.use("/api/trainer", trainerRoutes)
app.use("/api/type", typeRoutes)

app.get("/", (req, res) =>{
    res.send("Catch 'em All API!")
})

app.use((err, req, res, next) => {
    console.err(err)
    res.status(500).json({error: err})
})

app.listen(PORT, ()=>{
    console.log("Pokemon Server listening at http://localhost:"+PORT)
    connectDB()
})