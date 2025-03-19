const AuthService = require("../Services/AuthService");
const bcrypt = require("bcrypt");

async function userSignup(req, res) {

    const body = req.body;
    const username = body.username;
    const password = await encryptPassword(body.password);


    const salt = bcrypt.genSalt();
    

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
            res.status(200).json(loginResponse)
        } else {
            res.status(403).json({message: "invalid credentials"})
        }
    } catch (errr) {
        res.status(500).json({message: "server error ", errr})
    }
}

async function encryptPassword(password) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, 0);
    return hashedPassword;
}


module.exports = {
    userSignup,
    login
}