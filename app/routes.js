var express = require('express');

var app = express();

var passport = require('passport');
var passportLocal   = require('passport-local');

var passport = require ('../config/passport.js');
var cookie = require('react-cookie');

var Card = require('./models/card');

var email;
var myCards;

module.exports = function(app, passport) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
    

    
         res.sendFile('account.html', { root: "public" });
      

    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // process the login form


    app.get('/login', function(req, res){

        res.send(JSON.stringify(req.user.local.email));

    });
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

        currentUserEmail = req.user.local.email;

        console.log("Current user is "+currentUserEmail);


        res.sendFile('account.html', { root: "public" });

    });


    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    // =====================================
    // ADDCARD route
    // =====================================
    app.post('/addcard', function(req, res){
        var newCard = new Card(req.body);
        console.log(req.body);
        
        newCard.save(function(err, doc) {
            if (err) {
            console.log(err);
            }
            else {
 
            // res.send(doc);
            }

        })

    });

    // =====================================
    // GET INVENTORY route
    // =====================================
    app.get('/getcard', function(req, res){
     // email = cookie.load('email');

     console.log("ROUTES");
     console.log(req.cookies.email);

     var userEmail = req.cookies.email;

      Card.find({"email" : userEmail}, function(response, cards) {
          console.log("CARD RESPONSE");
          console.log(response);

          

          var myCards = res.json(cards);


          // cookie.save('myCards', myCards);

        // var cookieLoad = cookie.load('myCards');
           
      });
         
     });



    // =====================================
    // ALLCARDS route
    // =====================================
    app.get('/allcards', function(req, response, error){
        Card.find({}, function (err, cards) {
            if (err)
            return (err);
            response.json(cards);
        });
        
    });


    // =====================================
    // TRADECARDS route
    // =====================================
    app.get('/trade', function(req, res){
        res.sendFile('trade.html', { root: "public" });

    });

};



// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
};
