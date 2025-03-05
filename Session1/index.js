const http = require("node:http");
const PORT = 8083;


const server  = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;

    if(url === "/") {
        // res.writeHead(200, { "content-type": "text/html" })
        res.write("Welcome to the home page ");
        res.write("hello utkarsh");
        res.end();
    } else if (url === "/abouts") {

        if(method === "GET") {
            res.end("This website is created by utkarsh, 8837463389"); // VV important line 
        } else {
            res.writeHead(404)
            res.end("CANT POST HERE");
        }
    } else if (url === "/fitness") {
        const fitnessObject = {
            diet: "2kg",
            height: 170,
            running: 10,
            sleep: true,
            activities: ["cycling", "gym"],
            cultAddress: {
                houseNumber: "1910",
                street: "HSR layour banglore"
            },
            createdDate: new Date().toLocaleDateString(),
            createdTime: new Date().toLocaleTimeString(),
        }

        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify(fitnessObject));
    }


    console.log("I have recieved request :: " , url)
});


server.listen(PORT, () => {
    console.log("THUMBS UP the server is up at port number ", PORT)
})




