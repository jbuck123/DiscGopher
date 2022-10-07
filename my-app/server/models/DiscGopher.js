const mongoose = require('mongoose')

const DiscGopherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    discs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Disc'
    }]
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