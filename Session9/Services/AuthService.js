const UserModel = require("../Database/Models/User.Model");
const bcrypt = require("bcrypt");

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


    static async login(username, password) {
        
        const loginResponse = {
            isLogged: false
        }
        const user = await AuthService.findUserByUsername(username);

    
        if(!user || !user.length) {
            return loginResponse;
        } else {
            const res = await bcrypt.compare(password, user[0].password)
            return {
                isLogged: res
            };
        }


    }

    static async findUserByUsername(username) {
        const user = await UserModel.find({username: username});
        return user;
    }

}

module.exports = AuthService;