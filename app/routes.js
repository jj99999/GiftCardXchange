var express = require('express');

var app = express();

var passport = require('passport');
var passportLocal   = require('passport-local');

// var passport = require ('./config/passport.js');

module.exports = function(app, passport) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        // res.render('index.js'); // load the index.js file

        res.sendFile('home.html', { root: "public" });
    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    // app.get('/login', function(req, res) {

    //     // render the page and pass in any flash data if it exists
    //     res.render('login.js', { message: req.flash('loginMessage') });

    // });

    // process the login form
    app.post('/login');

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    app.get('/register', function(req, res) {

        // render the page and pass in any flash data if it exists
        // res.render('signup.js', { message: req.flash('signupMessage') });

        res.sendFile('register.html', { root: "public" });
    });

    // process the signup form
    // app.post('/register');

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




 app.post('/register', 


    // function (req, res) {
    // console.log("blah");
    // console.log(req.body);
    //  // body...
    // }

    passport.authenticate('local-signup', {

        successRedirect : '/myaccount', // redirect to the secure profile section
        failureRedirect : '/', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }

    ));

 // app.post('/login', passport.authenticate('local-login', {
 //        successRedirect : '/myaccount', // redirect to the secure profile section
 //        failureRedirect : '/login', // redirect back to the signup page if there is an error
 //        failureFlash : true // allow flash messages
 //    }));
};


// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}