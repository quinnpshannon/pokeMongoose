import mongoose from "mongoose";
const pokeSchema = new mongoose.Schema({
    // the National Dex number for the Pokemon
    nDex: {
        type: Number,
        required: true
    },
    // the Name of the pokemon
    name: {
        type: String,
        required: true
    },
    // The types of the pokemon, in an array as strings. 
    // They must match the list in the enum (all lowercase)
    // and only a type from that list.
    types: {
        type: [
            {
                type: String,
                enum: ["normal", "fire", "water", "electric", "grass", "ice", "fighting",
                    "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon",
                    "dark", "steel", "fairy"
                ]
            }
        ],
        required: true
    },
    // the stats of the pokemon, in an object. 
    stats: {
        type: {
            hp: { type: Number, required: true},
            attack: { type: Number, required: true},
            defense: { type: Number, required: true},
            specialAttack: { type: Number, required: true},
            specialDefense: { type: Number, required: true},
            speed: { type: Number, required: true}
        },
        required: true,
        _id: false
    }
})

const Model = mongoose.model("pokemon", pokeSchema, "pokemon")
export default Model 