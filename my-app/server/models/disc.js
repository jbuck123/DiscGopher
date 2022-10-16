const mongoose = require('mongoose')
const User = require("./user")

const DiscSchema = new mongoose.Schema({
    manufacturer: {
        type: String
    },
    name: {
        type: String
    },
    speed: {
        type: Number
    },
    glide: {
        type: Number
    },
    turn: {
        type: Number
    },
    fade: {
        type: Number
    },
    stability: {
        type: Number
    },
    diameter: {
        type: String
    },

    height: {
        type: String
    },

    rim_depth: {
        type: String
    },
    rim_width: {
        type: String
    },
    bead: {
        type: String
    },
    link: {
        type: String
    },
    user: { 
        
    }
})
module.exports = mongoose.model("Disc", DiscSchema)