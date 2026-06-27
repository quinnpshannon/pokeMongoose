import mongoose from "mongoose";
const typeSchema = new mongoose.Schema({
    value: {
        type: String,
        enum: ["normal", "fire", "water", "electric", "grass", "ice", "fighting",
            "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon",
            "dark", "steel", "fairy"],
        required: true
    },
    normal: { type: Number, enum: [0,.5,1,2], required: true},
    fire: { type: Number, enum: [0,.5,1,2], required: true},
    water: { type: Number, enum: [0,.5,1,2], required: true},
    electric: { type: Number, enum: [0,.5,1,2], required: true},
    grass: { type: Number, enum: [0,.5,1,2], required: true},
    ice: { type: Number, enum: [0,.5,1,2], required: true},
    fighting: { type: Number, enum: [0,.5,1,2], required: true},
    poison: { type: Number, enum: [0,.5,1,2], required: true},
    ground: { type: Number, enum: [0,.5,1,2], required: true},
    flying: { type: Number, enum: [0,.5,1,2], required: true},
    psychic: { type: Number, enum: [0,.5,1,2], required: true},
    bug: { type: Number, enum: [0,.5,1,2], required: true},
    rock: { type: Number, enum: [0,.5,1,2], required: true},
    ghost: { type: Number, enum: [0,.5,1,2], required: true},
    dragon: { type: Number, enum: [0,.5,1,2], required: true},
    dark: { type: Number, enum: [0,.5,1,2], required: true},
    steel: { type: Number, enum: [0,.5,1,2], required: true},
    fairy: { type: Number, enum: [0,.5,1,2], required: true}
})

const Model = mongoose.model("type", typeSchema)
export default Model 