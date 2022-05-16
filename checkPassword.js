const { generateAccessToken,checkPass } = require('../functions/security.js');

const checkPassMiddleware = (req, res, next) => {
    const { username, password } = req.body;
    //if the username and password are correct
    if (checkPass(username, password)) {
        //generate an access token
        const token = generateAccessToken(username);
        //the response cookie is the token
        res.cookie('token', token);
        //go to the next bit
        next();
    } else {
        res.redirect('/login/failed');
    }
};
module.exports = checkPassMiddleware;