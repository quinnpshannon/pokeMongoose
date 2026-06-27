import mongoose from "mongoose";

const trainerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    gymLeader: {
        type: Boolean,
        default: false
    },
    pokemon: {
        type: [{
            species: {
                type: String,
                required: true
            },
            level: {
                type: Number,
                min: 1,
                max: 100,
                required: true
            },
            nickname: {
                type: String
            },
            _id: false
        }],
        required: true
    }
})

/*
    Things to Add: a Virtual to determine the Average Level of the Trainer's Pokemon
*/

const Model = mongoose.model( "trainer", trainerSchema)
export default Model 