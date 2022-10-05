const express = require("express");
const router = express.Router();
const DiscGopher = require("../models/DiscGopher");

// Getting all
router.get("/", async (req, res) => {
  try {
    const discGohpers = await DiscGopher.find();
    res.json(discGohpers);
  } catch (err) {
    // all 500 errors are server related and not user related / front end issues
    res.status(500).json({ message: err.message });
  }
});
// Getting one
router.get("/:id", getDiscGopher, (req, res) => {
  res.send(res.discGohper);
});
// creating one
router.post("/", async (req, res) => {
  const discGohper = new DiscGopher({
    name: req.body.name,
    password: req.body.password,
  });
  try {
    const newDiscGopher = await discGohper.save();
    // status 201 means successfull object created.
    // status 200 mean general success
    res.status(201).json(newDiscGopher);
  } catch (err) {
    // 400 is a user error and NOT a server error
    res.status(400).json({ message: err.message });
  }
});
// Updating one
router.patch("/:id", getDiscGopher, async (req, res) => {
    if (req.body.name != null) {
        res.discGohper.name = req.body.name
    }
    if (req.body.password != null) {
        res.discGohper.password = req.body.password
    }

    try {
        const updatedDiscGopher = await res.discGohper.save()
        res.json(updatedDiscGopher)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
});




// Deleting one
router.delete("/:id", getDiscGopher, async (req, res) => {
  try {
    await res.discGohper.remove();
    res.json({ message: "deleted user" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// this is middleware
// I can use this function for getting, updating and deleting DISCgophers
async function getDiscGopher(req, res, next) {
  let discGohper;
  try {
    discGohper = await DiscGopher.findById(req.params.id);
    if (discGohper == null) {
      // a 404 error means that you cannot find something
      return res.status(404).json({ message: "cannot find DiscGopher" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.discGohper = discGohper;
  next();
}

module.exports = router;
