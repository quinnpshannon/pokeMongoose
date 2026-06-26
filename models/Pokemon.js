import mongoose from "mongoose";
const pokeSchema = new mongoose.Schema({
    //here is where we will add the information for our pokemon
})

const Model = mongoose.model( "pokemon", pokeSchema, "pokemon")
export default Model 