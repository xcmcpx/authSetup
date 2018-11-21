const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const { JWT_SECRET } = require('./config/keys');
const User = require('./models/user');

//JSON WEB TOKENS STRATEGEY
passport.use(new JWTStrategy({
    //define where the token comes from and the secret we use
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: JWT_SECRET
}, async (payload, done) => {
    try{
        //find user specified in token
        const user = await User.findById(payload.sub);
        //if user doesn't exists, handle it
        if(!user){
            return done(null, false);
        }
        //otherwise return user
        done(null, user);
    }catch(error){
        done(error, false);
    }
}));

//LCOAL STRATEGY
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'pass'

}, async (email, password, done) => {
    try{
        //find user when given email
        const user = await User.findOne({ email });
        //if no user with email, handle it
        if(!user){
            return done(null, false);
        }
        //if found, check if password is correct
        const checkPass = await user.isValidPassword(password);
        //if not, handle
        if(!checkPass){
            return done(null, false);
        }
        //otherwise return user
        done(null, user);
    }catch(error){
        done(error, false);
    }
}));