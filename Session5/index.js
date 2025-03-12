const express = require('express')
const dotEnv = require("dotenv");
const mongoose = require('mongoose');
const BlogsRoute = require("./Routes/BlogsRoute");


const server = express()
const PORT = 8085;


// loads environment variables from a .env file into process.env
dotEnv.config();


// MILLDEWARE: BODY PARSER
server.use(express.json());


server.use("/v1/blogs", BlogsRoute)



const dbCOnnectionUrl = process.env.DB_CONNECTION + "";
const collectionName = process.env.COLLECTION_NAME + "";

// DATABASE CONNECTION
mongoose.connect(dbCOnnectionUrl + collectionName)
  .then(() => console.log('DB Connected!'));


server.listen(PORT, () => {
    console.log("THUMBS UP the server is up at port number ", PORT)
})






