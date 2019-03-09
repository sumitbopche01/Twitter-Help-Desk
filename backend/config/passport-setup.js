const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const keys = require('./keys');
// const User = require('../models/user-model');


passport.use(new TwitterStrategy({
    consumerKey: keys.twitter.consumerKey,
    consumerSecret: keys.twitter.consumerSecret,
    callbackURL:'/oauth/callback'
},(accessToken, refreshToken, profile, done) => {
    done(null, profile);
}))
