const express = require("express");

const DiscRouter = express.Router();
const Disc = require("../models/disc");



DiscRouter.get("/", async (req , res) => {
    try {
        const discs = await Disc.find();
        res.send(discs)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})
DiscRouter.get("/:disc", async (req, res) => {
    try {
        const disc = await Disc.find({name: req.params.disc })
        res.send(disc)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})




DiscRouter.get("/innova", async (req , res) => {
    try {
        const discs = await Disc.find({ manufacturer: "Innova" });
        res.send(discs)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
} )
DiscRouter.get("/discraft", async (req , res) => {
    try {
        const discs = await Disc.find({ manufacturer: "Discraft" });
        res.send(discs)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
} )
DiscRouter.get("/discmania", async (req , res) => {
    try {
        const discs = await Disc.find({ manufacturer: "Discmania" });
        res.send(discs)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
} )
DiscRouter.get("/DD", async (req , res) => {
    try {
        const discs = await Disc.find({ manufacturer: "Dynamic Discs" });
        res.send(discs)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
} )
DiscRouter.get("/mvp", async (req , res) => {
    try {
        const discs = await Disc.find({ manufacturer: "MVP" });
        res.send(discs)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
} )
DiscRouter.get("/prodigy", async (req , res) => {
    try {
        const discs = await Disc.find({ manufacturer: "Prodigy" });
        res.send(discs)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
} )
DiscRouter.get("/westside", async (req , res) => {
    try {
        const discs = await Disc.find({ manufacturer: "Westside" });
        res.send(discs)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
} )
DiscRouter.get("/kastaplast", async (req , res) => {
    try {
        const discs = await Disc.find({ manufacturer: "Kastaplast" });
        res.send(discs)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
} )



module.exports = DiscRouter;