const express = require('express')
const homeResponse = require("./Controllers/homeController");
const getUserInformation = require('./Controllers/UsersController');
const userData = require('./usersData');
const { getAllUsers, getUsersByGender, getUserByID } = require('./Controllers/UserActivityController');

const ActivityUsersRoute = require("./Routes/ActivityUsersRoute");


const server = express()
const PORT = 8085;




// EXPRESS ROUTERS 
server.use("/v1/activity/users" , ActivityUsersRoute)





server.listen(PORT, () => {
    console.log("THUMBS UP the server is up at port number ", PORT)
})






