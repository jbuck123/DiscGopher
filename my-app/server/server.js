const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config()

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log("connected to Database"))

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json())

const UserRouter = require("./routes/DiscGophers")
app.use('/DiscGophers', UserRouter)
// localhost:3001/DiscGophers

app.listen(PORT, () => {
    console.log(` Server listening on ${PORT}`);
});