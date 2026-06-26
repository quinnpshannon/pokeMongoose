import mongoose from "mongoose";
const trainerSchema = new mongoose.Schema({
    //here is where we will add the information for our pokemon
})

const Model = mongoose.model( "trainer", trainerSchema)
export default Model 