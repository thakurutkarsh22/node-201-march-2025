function getUserInformation (req, res) {
    const utkarsh = {
        name: "utkarsh",
        class: "12th"
    }

    const anil = {
        name: "anil",
        class: "11th"
    }
    const params = req.params;
    const name = params.name

    if(name === "utkarsh") {
        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify(utkarsh))
    } else if (name === "anil") {
        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify(anil))
    } else {
        res.end("NO USER LIKE THIS")
    }
}


module.exports = getUserInformation;
// COMMON JS 

// export import ES6 (Echma script 6)