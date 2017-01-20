
//Dependencies
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var morgan = require('morgan');
var methodOverride = require('method-override');
var request = require('request');
var queryString = require('querystring');
var mysql = require('mysql');
var flash = require('connect-flash');
var mongoose = require('mongoose');
var models = require('./app/models');
var PORT = process.env.PORT || 3000; 


// passport setup
var passport = require('passport');
var passportLocal   = require('passport-local');
var configDB = require('./config/database.js');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

require('./config/passport')(passport); // pass passport for configuration






//Express settings
//=========================================//
var app = express();

app.use(methodOverride('_method'));
// do we need to set an auth cookie on this line?
// app.use(session({secret: 'spotify', cookie: {maxAge: 60000}}));
app.use(cookieParser()); 


// NEED TO STORE FAVICON  FILE HERE
app.use(favicon(__dirname + '/public/images/favicon.ico'));

app.use(logger('dev'));
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch',
	name: 'GX_cookie',
	// store: sessionStore,
	proxy: true,
	resave: true,
	saveUninitialized: true
	 })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// require app routes
require('./app/routes.js')(app, passport); 


//Forwards errors to the Error Handler
// app.use(function(req, res, next){
// 	var err = new Error("Not found.");
// 	err.status = 404; 
// 	next(err); 
// });

// //Error Handler
// app.use(function(err, res, next){
// 	res.status(err.status || 500);
// 	res.render('error', {
// 		message: err.message,
// 		error: (app.get('env') === 'development') ? err : {}
// 	})
// })



app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});

module.exports = app; 