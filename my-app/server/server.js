const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config()
const User = require("./models/user")
const Disc = require("./models/disc")

const MongoClient = require("mongodb").MongoClient;

const cookieParser = require("cookie-parser");
var jwt = require('jsonwebtoken');
const {createToken, verifyToken} = require("./middleware/auth")
const bcrypt = require('bcrypt')
const fs = require("fs");
const { parse } = require("csv-parse");

const { seedDB } = require("../server/seed/seeder")



mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log("connected to Database"))

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json())
app.use(cookieParser())

const DiscRouter = require("./routes/disc")
const UserRouter = require("./routes/login");


app.use('/users', UserRouter)
app.use('/discs', DiscRouter)


// localhost:3001/users

// seeder


// csv parser
const data = []
data.forEach((item) => db.Disc.insert(item))

fs.createReadStream("./seed/pdga-approved-disc-golf-discs_2022-10-13T00-30-12 (1).csv") 
.pipe(parse({ 
    delimiter: ",",
    columns: true,
    ltrim: true
}))
.on("data", function (row) {
   data.push(row)
    // The .on("data") event is where each row in your CSV file will be read.
})
.on("error", function (error) {
    console.log(error.message);
})
.on("end", function() {
    console.log("finished");
    console.log(data)
})


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
   const { name , password } = req.body;

   const user = await User.findOne({ name })

   if (!user) res.status(400).json({ error: "user doesnt exist "});

   const dbPassword = user.password;
   bcrypt.compare(password, dbPassword).then((match) => {
       if(!match) {
           res.status(400).json({ error: "wrong username and password combination"})
       } else {
           const accesToken = createToken(user)

           // storing token in the browser

           res.cookie("access-token", accesToken, {
               // expiration date
               // this is in milliseconds, so I 
               maxAge: 60*60*24*1000,
               HttpOnly: true
           })
           res.json(user)
       }
   })

})

// auth route

app.get("/profile" , verifyToken, async (req, res) => {
   try {
       // needed to wait for verifyToken to run its thing before getting validatToke
       // that is why i was getting { object, Object }
    validatedUser = await res.validToken
    res.json(validatedUser)
   } catch (error) {
    res.status(500).json({message: error.message})
   }
})


// logout 

app.get("/logout", async ( req, res) => {
    // set up token to expire after 5 seconds
    res.cookie('access-token', 'none', {
        expires: new Date(Date.now() + 5 * 1000),
        httpOnly: true,
    })
    res.status(200).json({success:true, message: "user logged out"})
})



app.listen(PORT, () => {
    console.log(` Server listening on ${PORT}`);
});