const jwt = require("jsonwebtoken");
const JWT_KEY = "asdadasdasdas1234123adasd"


function VerifyAUthentication(req, res, next) {
    const headers = req.headers;
    const {authorization} = headers;
    const token = authorization?.split(" ")[1];
    console.log("VerifyAUthentication", token);

    // if token is not there it means that the user has not logged in on this device even once.
    if(!token) {
        res.status(401).json({
            message: "please login"
        })
    } else {
        // 1. verify the token 
        jwt.verify(token, JWT_KEY, (error, decodedJWTToken) => {
            if(error) {
                // someone is trying to either hack or your old JWT login is expired
                res.status(401).json({
                    message: "please re - login"
                })
            } else {

                req.username = decodedJWTToken.username
                next();
            }
        })
    }
}


module.exports = VerifyAUthentication;