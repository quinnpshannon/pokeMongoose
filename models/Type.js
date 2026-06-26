import mongoose from "mongoose";
const typeSchema = new mongoose.Schema({
    //here is where we will add the information for our pokemon
})

const Model = mongoose.model( "type", typeSchema)
export default Model 