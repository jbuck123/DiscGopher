const mongoose = require('mongoose')

const discSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    DiscGopher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DiscGopher'
    }
})

module.exports = mongoose.model('Disc', discSchema);