const express = require("express");

const router = express.Router();
const {Disc, DiscGopher} = require("../models/DiscGopher");

// Getting all
router.get("/", async (req, res) => {
  try {
    const discGohpers = await DiscGopher.find().populate('discs');
    res.json(discGohpers);
  } catch (err) {
    // all 500 errors are server related and not user related / front end issues
    res.status(500).json({ message: err.message });
  }
});

router.get("/test", async (req, res) => {
res.send("fuck this routing shit")
});


router.get("/disc", async (req, res) => {
  disc = await Disc.find()
  console.log(disc)
  res.json(disc)
})

// Getting all discs
// not working





// Getting one user and disc
router.get("/:id", async (req, res) => {
  DiscGopher.findOne({_id: req.params.id})
  .populate("discs") 
  .then(discGopher => {
    res.json(discGopher)
  })
 
});



// // disc 
// router.get("/:id/disc/id", getDisc, (req, res) => {
//   res.send(res.disc)
// } )




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
// Updating user and disc
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

// disc 
router.patch("/:id")




// Deleting one
router.delete("/:id", getDiscGopher, async (req, res) => {
  try {
    await res.discGohper.remove();
    res.json({ message: "deleted user" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



///
//// FIND ONE DISC
///
router.get("/disc/:id", async ( req, res) => {
try {
  const id = req.params.id
  console.log(id)
  const disc = await Disc.findById(id)
  console.log(disc)
res.send(disc)
} catch (error) {
  
}
})



////
// Deleting Discs
////
router.delete("/disc/:id", async (req, res) => {
  // get of the user from the params 
  const id = req.params.id
  const disc = await Disc.findByIdAndDelete(id)
  res.send("deleted disc")
})

////
// CREATING DISCS 
////


router.post('/:id/disc', async (req, res) => {
  // find out which post you are commenting on
  const id = req.params.id;
  // get the name of the disc and post id
  const disc = new Disc({
    name: req.body.name,
    DiscGopher: id
  })
  try {
    
    await disc.save();
    // find the DiscGopher using findbyId
    const relatedUser = await DiscGopher.findById(id).populate("discs");;
    // push new disc into array
    relatedUser.discs.push(disc);
    await relatedUser.save()
    res.json(relatedUser)

  } catch (error) { 
    res.status(500).json({ message: error.message })
    
  }


  ////
// DELETING DISCS
////
 

})








// this is middleware
// I can use this function for getting, updating and deleting DISCgophers
async function getDiscGopher(req, res, next) {
  let discGopher;
  try {
    discGopher = await DiscGopher.findById(req.params.id);
    
    if (discGopher == null) {
      // a 404 error means that you cannot find something
      return res.status(404).json({ message: "cannot find DiscGopher" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.discGopher = discGopher;
  next();
}
// function to get, update, and delete discs

// async function getDisc(req, res, next) {
//   let disc;
//   try {
//     disc = await Disc.findById(req.params.id);
//     if(discGohper == null) {
//       return res.status(404).json({ message: "cannot find Disc "})
//     }
//   } catch (error) {
//     return res.status(500).json({ message: error.message})
//   }
//   res.disc = disc;
//   next();
// }ç

module.exports = router;
