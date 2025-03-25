const JWTStratergy = require("passport-jwt").Strategy;
const ExtractedJwt = require("passport-jwt").ExtractJwt;
const JWT_KEY = "asdadasdasdas1234123adasd"


const options = {
    jwtFromRequest: ExtractedJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_KEY
}


const stratergy = new JWTStratergy(options, (payload, done) => {
    console.log("payload", payload) // payload { username: 'thakurutkars22222', iat: 1742918642, exp: 1742918702 }

    try {
        // here we can find the user 
        return done(null, true)
    } catch (error) {
        return done(error, false)
    }
});


module.exports = (passport) => {
    passport.use(stratergy);
}


