const express = require('express')
const dotEnv = require("dotenv");


// loads environment variables from a .env file into process.env
dotEnv.config();




const ActivityUsersRoute = require("./Routes/ActivityUsersRoute");
const userData = require('./usersData');


const server = express()
const PORT = 8085;

const password = (String)(process.env.PASSWORD);




server.get("/v1/activity/users", (req,res) => {

    const headers = req.headers;
    let {authorization} = headers;
    authorization = (String)(authorization);

    console.log(authorization, password, "password and auth" ,authorization === password, authorization == password);

    if(authorization == password) {
        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify(userData.data));
    } else {
        res.status(403).json({message: "this is offlimits"});
    }  
})


// EXPRESS ROUTERS 
server.use("/v1/activity/users" , ActivityUsersRoute)





server.listen(PORT, () => {
    console.log("THUMBS UP the server is up at port number ", PORT)
})






