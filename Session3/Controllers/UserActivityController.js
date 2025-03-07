const userData = require("../usersData");
const { isActivityUserSchemaValid } = require("../Validator/ActivityUserValidation");

const PASSWORD = "asdf1234"


function getAllUsers(req,res) {

    const headers = req.headers;
    const {authorization} = headers;

    if(authorization === PASSWORD) {
        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify(userData.data));
    } else {
        res.status(403).json({message: "this is offlimits"});
    }  
}


function getUsersByGender(req, res) {
    console.log("request recieved in getUsersByGender")
    const query = req.query;
    const searchedGender = query.gender;
    const searchedAge = query.age;



    // 0------- VALIDATION 

    // OLD WAY OF VALIDATION - which is fine but very very hard to know if you are correct, testing , developing 
    // if(!searchedGender && !searchedAge) {
    //     res.writeHead(422, "Unprocessable ENTITY")
    //     res.end("Please have gender or age");
    // } else if(!["male", "female"].includes(searchedGender)) {
    //     res.writeHead(422, "Unprocessable ENTITY")
    //     res.end("Please have Correct GENDER");
    // } else if(!(Number)(searchedAge)) {
    //     res.writeHead(422, "Unprocessable ENTITY")
    //     res.end("Please have Correct Age");
    // } else if (!(searchedAge > 12 && searchedAge< 100)) {
    //     res.status(422).json({message: "age is not in the range"});
    // }

    // NEW WAY OF VALIDATION JOI 
    const error = isActivityUserSchemaValid({age:searchedAge, gender: searchedGender })

    if(error) {
        res.status(422).json(error);
        return;
    }






    // ------------- VALIDATION END 








    const usersData = userData
    const data = usersData.data; 

    const filteredData = data.filter(user => {
        const userGender = user.gender;
        const userAge = user.dob.age;


        if(userGender === searchedGender || searchedAge === userAge) {
            return true
        } else {
            return false;
        }
    })

    console.log(JSON.stringify(filteredData), 'filteredData', filteredData.length)

    if(filteredData.length) {
        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify(filteredData));
    } else {
        res.end("NO USER FOUNDsss");
    }

    

}

function getUserByID(req,res) {
    const params = req.params;
    const serachedUUID = params.uuid;


    const usersData = userData
    const data = usersData.data; 

    data.find(user => {
        const uuid = user.login.uuid;
        if(uuid === serachedUUID) {
            res.writeHead(200, { "content-type": "application/json" })
            res.end(JSON.stringify(user));
        }
    })
    res.end("NO USER FOUND " + serachedUUID);
}

module.exports = {
    getAllUsers,
    getUsersByGender,
    getUserByID
}