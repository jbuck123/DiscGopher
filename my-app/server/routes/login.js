const express = require("express");

const UserRouter = express.Router();
const User = require("../models/user");

// get all the users

UserRouter.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// get one user

UserRouter.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// create all the users

UserRouter.post("/", async (req, res) => {
  // you have to create it like this
  const user = new User({
    name: req.body.name,
    password: req.body.password,
  });
  // console.log(user)
  try {
    const newUser = await user.save();
    // status 201 means succesfull save
    res.status(201).json(newUser);
    console.log(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// delete user

UserRouter.delete('/:id', getUser, async (req,res) => {
    console.log(res.user)
 try {
     await res.user.remove()
     console.log(`${user.name} deleted from database`)
 } catch (error) {
    res.status(500).json({ message: error.message });
 }
})

// update user 

UserRouter.patch('/:id', getUser, async (req,res) => {
    console.log(req.body.password)
    console.log(res.user.password)
    if (req.body.name != null){
        res.user.name = req.body.name
    }
    if( req.body.password != null) {
        res.user.password = req.body.password
    } 
    try {
        updatedUser = await res.user.save()
        res.json(updatedUser)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
} )

// middleware to getUser

async function getUser(req, res, next) {
    try {
        user = await User.findById(req.params.id)
        if(user == null){
            res.status(404).send('no user with that id')
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
                // we can use res.user in all the functions that we call 
                // getUser() in and it will return the user from the ref'd id
    res.user = user
    next()
}
module.exports = UserRouter;