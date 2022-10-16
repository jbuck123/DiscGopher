const mongoose = require('mongoose')
bcrypt = require('bcrypt')

SALT_FACTORY = 10;

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        default: null
        // required: true
    },
    password: {
        type: String,
        // required: true
    },
    discBag: [{
        manufacturer: {
            type: String
        },
        name: {
            type: String
        }
    }], 
    token: { type: String},

})



UserSchema.pre("save", function (next) {
    const user = this
    console.log(user)
        // only hashes passwords that are new or being modified.
    if (this.isModified("password") || this.isNew) {
        bcrypt.genSalt(10, function(saltError, salt) {
            if (saltError) {
                return next(saltError)
            } else {
                bcrypt.hash(user.password, salt, function(hashError, hash) {
                    if (hashError) {
                        return next( hashError )
                    }


                    user.password = hash
                    console.log(hash)
                    console.log(user.password)
                    next()
                })
            }
        })
    } else {
        return next()
    }
})





module.exports = mongoose.model("User", UserSchema)