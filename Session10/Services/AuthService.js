const UserModel = require("../Database/Models/User.Model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_KEY = "asdadasdasdas1234123adasd"

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
            isLogged: false,
            username: "",
        }
        const user = await AuthService.findUserByUsername(username);

    
        if(!user || !user.length) {
            return loginResponse;
        } else {
            const res = await bcrypt.compare(password, user[0].password)
            return {
                isLogged: res,
                username: user[0].username,
            };
        }


    }

    static async findUserByUsername(username) {
        const user = await UserModel.find({username: username});
        return user;
    }

    static generateJWTToken(username) {
        const authData = {
            username: username
        }
        const token = jwt.sign(authData, JWT_KEY, {
            expiresIn: "60000ms"
        })
    
        return token;
    }
    
    static async encryptPassword(password) {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, 0);
        return hashedPassword;
    }

}

module.exports = AuthService;