const router = require('express').Router();
const passport = require('passport');

/*
// auth login
router.get('/login', (req, res) => {
    res.render('login', { user: req.user });
});

// auth logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});
*/

router.get('/twitter', passport.authenticate('twitter'));

// callback route for twitter to redirect to
// hand control to passport to use code to grab profile info
router.get('/callback', passport.authenticate('twitter'), (req, res) => {
    
    res.send(req.user);
});

module.exports = router;
