const UserModel = require("../Database/Models/User.Model");

class AuthService {

    static async createNewUser(username, password, email) {
        const userObject = UserModel({
            username: username,
            password: password,
            email: email,
        })
    
        // this save is saving the blogObject in the database
    
        try {
            const response = await userObject.save();
            return response;
        } catch(error) {
            return error
        }
    }

}

module.exports = AuthService;