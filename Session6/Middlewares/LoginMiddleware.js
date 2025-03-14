function VerifyAUthentication(req, res, next) {
    const headers = req.headers;
    const {authorization} = headers;

    if(authorization == "asdf1234") {
        // this path is if authroization passes for the request
        next();
    } else {
        res.status(403).json({message: "this is offlimits please authenticate yourself"});
    }  
}


module.exports = VerifyAUthentication;