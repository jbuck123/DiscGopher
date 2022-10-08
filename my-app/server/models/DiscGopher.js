const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})


const DiscSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 

  
})

const Disc = mongoose.model('Disc', DiscSchema);
const DiscGopher = mongoose.model('DiscGopher', DiscGopherSchema )

module.exports = { 
    Disc, DiscGopher
}