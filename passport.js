const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const GooglePlusTokenStrategy = require('passport-google-plus-token');
const FacebookTokenStrategy = require('passport-facebook-token');
const config = require('./config/keys');
const User = require('./models/user');

//JSON WEB TOKENS STRATEGEY
passport.use(new JWTStrategy({
    //define where the token comes from and the secret we use
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.JWT_SECRET
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

//GOOGLE PLUS STRATEGY
passport.use('googleToken', new GooglePlusTokenStrategy({
    clientID: config.oauth.google.clientID,
    clientSecret: config.oauth.google.clientSecret
}, async (accessToken, refreshToken, profile, done) => {
    try{
        console.log('accessToken', accessToken);
        console.log('refreshToken', refreshToken);
        console.log('profile', profile);

        //check whether this current user exists in our DB
        const existingUser = await User.findOne({ 'google.id': profile.id });
        if(existingUser) {
            console.log('User already exisits in our DB');
            return done(null, existingUser);
        }
        //if new account create new document in collection
        console.log("User does not exist, we are creating one.");
        const newUser = new User({
            method: 'google',
            google: {
                id: profile.id,
                email: profile.emails[0].value
            }
        });

        await newUser.save();
        done(null, newUser);
    }catch(error) {
        done(error, false, error.message);
    }

}));

//FACEBOOK STRATEGY
passport.use('facebookToken', new FacebookTokenStrategy({
    clientID: config.oauth.facebook.clientID,
    clientSecret: config.oauth.facebook.clientSecret
}, async (accessToken, refreshToken, profile, done) => {
    try {
        console.log('accessToken', accessToken);
        console.log('refreshToken', refreshToken);
        console.log('profile', profile);

        const existingUser = await User.findOne({ 'facebook.id': profile.id });
        if(existingUser) {
            return done(null, existingUser);
        }

        const newUser = new User({ 
            method: 'facebook',
            facebook: {
                id: profile.id,
                email: profile.emails[0].value
            }
        });

        await newUser.save();
        done(null, newUser);
    }catch(error){
        done(error, false, error.message);
    }
}));

//LOCAL STRATEGY
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'pass'

}, async (email, password, done) => {
    try{
        //find user when given email
        const user = await User.findOne({ "local.email": email });
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