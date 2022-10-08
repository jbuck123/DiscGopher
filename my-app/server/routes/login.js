const express = require("express");

const UserRouter = express.Router();
const User = require("../models/user")



// get all the users

UserRouter.get('/', async (req, res) => {

    try {
        const users =  await User.find()
        res.send(users)
    }
  catch(err) {
    res.status(500).json({ message: err.message })
  }
})

// create all the users 

UserRouter.post('/', async (req, res) => {
    // you have to create it like this 
    const user =  new User({
        name: req.body.name,
        password: req.body.password
    })
    // console.log(user)
    try {
        const newUser = await user.save() 
            // status 201 means succesfull save
            res.status(201).json(newUser)
        console.log(newUser)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

})

module.exports = UserRouter

