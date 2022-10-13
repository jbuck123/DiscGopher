const mongoose = require('mongoose')

const DiscSchema = new mongoose.Schema({
    manufacturer: {
        type: String
    },
    discModel: {
        type: String
    },
    maxWeight: {
        type: Number
    },
    Diameter: {
        type: Number
    },

    Height: {
        type: Number
    },

    RimDepth: {
        type: Number
    },
    InsideRimDiameter: {
        type: Number
    },
    RimThickness: {
        type: Number
    },
    RimDepth_DiameteRatio: {
        type: Number
    },
    RimConfiguration: {
        type: Number
    },
    Flexibility: {
        type: Number
    },
    Class: {
        type: String
    },
    MaxWeightVint: {
        type: Number
    },
    LastYearProduction: {
        type: Date
    },
    CertificationNumber: {
        type: String
    },
    ApprovedDate: {
        type: Date
    },



})
module.exports = mongoose.model("Disc", DiscSchema)