const AuthService = require("../Services/AuthService");


async function userSignup(req, res) {

    const body = req.body;
    const username = body.username;
    const password = await AuthService.encryptPassword(body.password);
    const email = body.email;

    try {
        const response = await AuthService.createNewUser(username, password, email);
        res.status(201).json(response);
    } catch(error) {
        res.status(400).json({
            error,
            message: "we were not able to create a user for you"
        });
    }
}


async function login(req, res) {
    const body = req.body;
    const username = body.username;
    const password = body.password;

    try {
        const loginResponse = await AuthService.login(username, password);

        if(loginResponse.isLogged) {
        // no generate the JWT TOKEN if the user is ACTUALLY AUTHENTICATED and return this jwt token.

            const token = AuthService.generateJWTToken(loginResponse.username);
            
            const response = {
                ...loginResponse,
                token: token
            }
            res.status(200).json(response)
        } else {
            res.status(403).json({message: "invalid credentials"})
        }
    } catch (errr) {
        res.status(500).json({message: "server error ", errr})
    }
}


module.exports = {
    userSignup,
    login
}