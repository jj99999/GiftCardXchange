var express = require('express');

var app = express();

var passport = require('passport');
var passportLocal   = require('passport-local');

var passport = require ('../config/passport.js');

var addcard = require ('../app/Components/Children/addcard-draft.js');

module.exports = function(app, passport) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {

        res.sendFile('home.html', { root: "public" });
    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/myaccount', // redirect to the secure profile section
        failureRedirect : '/', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
        }));



    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    app.get('/register', function(req, res) {

        // render the page and pass in any flash data if it exists
        // res.render('signup.js', { message: req.flash('signupMessage') });

        res.sendFile('register.html', { root: "public" });
    });

    app.post('/register', 
        passport.authenticate('local-signup', {
        successRedirect : '/myaccount', // redirect to the secure profile section
        failureRedirect : '/', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
        }
    ));

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/myaccount', isLoggedIn, function(req, res) {

        // WE WILL HAVE TO RENDER THE REACT COMPONENTS HERE -- USE SAME ROUTING AS 
        // res.render('profile.js', {
        //     user : req.user // get the user out of session and pass to template
        // });

        res.sendFile('account.html', { root: "public" });
    });


    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

};

    // =====================================
    // ADDING A GIFT CARD TO USER'S INVENTORY
    // =====================================
    // process the ADD-CARD form
    // app.post('/addcard', 
    //     addcard.addNewCard({
    // }));



module.exports = {
// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}};