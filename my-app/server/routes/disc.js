const express = require("express");

const DiscRouter = express.Router();
const Disc = require("../models/user");



DiscRouter.get("/DiscGolf", async (req , res) => {
    try {
        const discs = await DiscGolf.find();
        res.send(discs)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
} )


module.exports = DiscRouter;