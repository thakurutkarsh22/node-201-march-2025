const express = require('express')
const homeResponse = require("./Controllers/homeController");
const getUserInformation = require('./Controllers/UsersController');
const userData = require('./usersData');


const server = express()
const PORT = 8085;


server.get("/", homeResponse)

server.get("/home", homeResponse)

server.get("/v1/abouts", (req, res) => {
    res.end("This website is created by utkarsh, 8837463389 EXPRESS PREMIUM ");
})

server.get("/v2/abouts", (req, res) => {
    res.end(" EXPRESS GAREEB");
})

server.post("/v1/abouts",(req, res) => {
    res.end("POSTING IN ABOUTS "); 
})


// ADVANCE URL 

// CONCEPT OF PARAMS
server.get("/v1/users/:name", getUserInformation)

// CONCEPT OF Query params 
// it will support url like http://localhost:8085/v1/search?keyssss=kohli
server.get("/v1/search", (req, res) => {
    const query = req.query;
    const key = query.keyssss;
    const age = query.age;

    res.end("HERE IS THE KEY YOU SEARCH FOR " + key + " ::: " + age);

})



// /ACTIVITY 

// ALL USERS 
server.get("/v1/activity/users", (req,res) => {
    const usersData = userData
    res.writeHead(200, { "content-type": "application/json" })
    res.end(JSON.stringify(userData.data));
})




// gender search 
server.get("/v1/activity/users/searchs", (req, res) => {
    console.log("request recieved")
    const query = req.query;
    const searchedGender = query.gender;
    const searchedAge = query.age;

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

    

})

// only perticular user

server.get("/v1/activity/users/:uuid", (req,res) => {
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
})












server.listen(PORT, () => {
    console.log("THUMBS UP the server is up at port number ", PORT)
})






