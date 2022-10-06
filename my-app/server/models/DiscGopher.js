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

module.exports = mongoose.model('DiscGopher', DiscGopherSchema)