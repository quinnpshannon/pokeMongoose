import 'dotenv/config'
import express from 'express'
import connectDB from './db.js'
import pokemonRoutes from './routes/pokemon.js'
import trainerRoutes from './routes/trainers.js'
import typeRoutes from './routes/types.js'

const app = express()
const PORT = process.env.PORT || 3000

// Middleware to make let us get json data from req.body
app.use(express.json())

// Route Handlers for the individual data routes
app.use("/api/pokemon", pokemonRoutes)
app.use("/api/trainer", trainerRoutes)
app.use("/api/type", typeRoutes)


app.get("/", (req, res) =>{
    res.send("Catch 'em All API!")
})

app.use((err, req, res, next) => {
    console.error(err)
    res.status(500).json({error: err})
})

app.listen(PORT, ()=>{
    console.log("Pokemon Server listening at http://localhost:"+PORT)
    connectDB()
})