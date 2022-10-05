const express = require('express')

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({message: "Hello from the backend Express!!"})
// visit http://localhost:3001/api  to see message above
})

app.listen(PORT, () => {
    console.log(` Server listening on ${PORT}`);
});