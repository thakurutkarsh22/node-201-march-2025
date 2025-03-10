function homeResponse (req, res, next) {
    res.write("Welcome to the home page EXPRESS  ");
    res.write("hello utkarsh");
    res.end();
}

module.exports = homeResponse;