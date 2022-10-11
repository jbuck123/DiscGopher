const  {sign, verify} = require("jsonwebtoken")
const jwt = require("jsonwebtoken")

const config = process.env
const verifyToken = (req, res, next ) => {
    // trying to find access token in the cookies 
const accessToken = req.cookies["access-token"];

    // if there isn't a token then this
if (!accessToken)
return res.status(400).json( { error: "user not authenticated"});

try {
       // comparing two tokens 
    const validToken = verify(accessToken, process.env.TOKEN_KEY )
    if (validToken) {
        req.authenticated = true
        console.log(validToken)
        res.validToken = validToken
        next()
        
    }
} catch (error) {
    console.log(error)
}
}


const createToken = (user) => {
        // accepting user as a prop and creating an access token.
        
    const accessToken = sign({ name: user.name, id: user.id}, process.env.TOKEN_KEY);
    return accessToken
}

module.exports = {createToken, verifyToken};