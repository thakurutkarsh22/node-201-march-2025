const AuthService = require("../Services/AuthService");

async function userSignup(req, res) {

    const body = req.body;
    const username = body.username;
    const password = body.password;
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


module.exports = {
    userSignup
}