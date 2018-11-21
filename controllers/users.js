const JWT = require('jsonwebtoken')
const User = require('../models/user');
const { JWT_SECRET } = require('../config/keys');

signToken = user => {
    return JWT.sign({
        iss: 'Chrispcodes',
        sub: user._id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 0.125) //current time + 3hours ahead
    }, JWT_SECRET);
}

module.exports = {

    signUp: async(req, res, next) => {
        // expect email/password from user
        const { email, pass } = req.value.body;
        //check if tehre is existing user with same email
        const foundUser = await User.findOne({ email });
        if(foundUser) {
             return res.status(403).json( {error: "email in use already"})
            }
        //create new user
        const newUser = new User({
            email: email,
            pass: pass,
            name: "defaultName",
            lName: "lNameTest"
        });
        await newUser.save();

        // generate token
        const token = signToken(newUser);

        //response with token
        res.status(200).json({ token });
    },
    signIn: async(req, res, next) => {
        //generate token
        const token = signToken(req.user);
        res.status(200).json({ token });

    },
    todolist: async(req, res, next) => {
        console.log("got here!!");
    }

}