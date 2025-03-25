const express = require('express')
const dotEnv = require("dotenv");
const mongoose = require('mongoose');
const BlogsRoute = require("./Routes/BlogsRoute");
const AuthRoute = require("./Routes/AuthRoute");
const cors = require("cors");

// THIS WILL ALLOW ALL THE ORIGINS 

const server = express()
const PORT = 8085;


// loads environment variables from a .env file into process.env
dotEnv.config();


// MILLDEWARE: BODY PARSER
server.use(express.json());
server.use(cors())



server.use("/v1/blogs", BlogsRoute)
server.get("/v1/intro", (req,res) => {
  res.send("hello to project 8")
})
// route for login and signup
server.use("/v1/auth", AuthRoute)



const dbCOnnectionUrl = process.env.DB_CONNECTION + "";
const collectionName = process.env.COLLECTION_NAME + "";

// DATABASE CONNECTION
mongoose.connect(dbCOnnectionUrl + collectionName)
  .then(() => console.log('DB Connected!'));


server.listen(PORT, () => {
    console.log("THUMBS UP the server is up at port number ", PORT)
})






