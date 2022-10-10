const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config()
const User = require("./models/user")
var jwt = require('jsonwebtoken');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log("connected to Database"))

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json())

const UserRouter = require("./routes/login")

app.use('/users', UserRouter)
// localhost:3001/users


// lets auth users in here i guess
// register 
app.post("/register", async (req,res) => {
   try {
       const { name, password} = req.body;

       // validate user input
       if (! (name && password)) {
           // 400 is user error
           res.status(400).send("All input fields must be filled")
       }

        // check for an old user
        const takenUser = await User.findOne({name});
        
        if (takenUser) {
            return res.status(409).send("name already exist. Please login or choose a different name")
        }

        // password get Encrypted in the model

        const user = await User.create({
            name,
            password
        })
        const token = jwt.sign(
            {user_id: user._id, name},
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h"
            }
        );

        // save user

        user.token = token

        //return user

        res.status(201).json(user);
    
    } catch (error) {
       console.log(error)
   }
})

    // login rout will: 
            // get user input, Validate user input , validate if the suer exists, very user password , create a signed JWT token

app.post("/login", async (req,res) => {
    try {
        const { name, password } = req.body;

        //validate user 

        if (!(name && password)) {
            // user error
            res.status(400).send("All input is required");
        }
        // validate if the user is in the database 
        const user = await User.findOne({ name });

        if(user && ( await bcrypt.compare(password, user.password))){
            console.log('bcrypt compare is hittin')
            const token = jwt.sign(
                {user_id: user._id, name},
                process.env.TOKEN_KEY,
                {
                    expiresIn: '2h'
                }
            );
            //save user token
            user.token = token;

            // send user // 200 error means success!
            res.status(200).json(user)
        }
        // else // invalid login
        res.status(400).send("invlaid credentials")
    } catch (error) {
        console.log(error)
    }
})



app.listen(PORT, () => {
    console.log(` Server listening on ${PORT}`);
});