const express = require('express')
const dotEnv = require("dotenv");


// loads environment variables from a .env file into process.env
dotEnv.config();




const ActivityUsersRoute = require("./Routes/ActivityUsersRoute");
const userData = require('./usersData');


const server = express()
const PORT = 8085;

const password = (String)(process.env.PASSWORD);




// server.get("/v1/activity/users", (req,res, next) => {

//     const headers = req.headers;
//     const {authorization} = headers;

//     console.log(authorization, password, "password and auth" ,authorization === password, authorization == password);

//     if(authorization == "asdf1234") {
//         res.writeHead(200, { "content-type": "application/json" })
//         res.end(JSON.stringify(userData.data));
//     } else {
//         res.status(403).json({message: "this is offlimits"});
//     }  
// })


// EXPRESS ROUTERS 
server.use("/v1/activity/users" , ActivityUsersRoute)


db.connect(url);



server.listen(PORT, () => {
    console.log("THUMBS UP the server is up at port number ", PORT)
})






