// This is a shell server file I copied from a previous project.  I will clean it up later.

//Dependencies
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');
var hbs = require('express-handlebars');
var request = require('request');
var queryString = require('querystring');
var sequelize = require('sequelize');
var mysql = require('mysql');
var models = require('./models');
var port = process.env.PORT || 3000; 


// Can we separate each route into a separate controller file and require them into the server?   That would make it easier to keep the length of the code manageable.
// For example,  each controller below would control one of the routes --   AddCard, Buy, Sell, etc.
//Controllers
var mainControl = require('./controllers/mainControl.js');
var spotifyControl = require('./controllers/spotifyControl.js');
var profileControl = require('./controllers/profileControl.js');
var seatgeekControl = require('./controllers/seatgeekControl.js');


//Express settings
//=========================================//
var app = express();

app.use(methodOverride('_method'));
app.use(session({secret: 'spotify', cookie: {maxAge: 60000}}));
app.use(cookieParser()); 


app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Need to revise routes below.
//Controller Routing
app.use('/', mainControl);
app.use('/profile', spotifyControl);
app.use('/seatgeek', seatgeekControl);
app.use('/callback', profileControl);

//Forwards errors to the Error Handler
app.use(function(req, res, next){
	var err = new Error("Not found.");
	err.status = 404; 
	next(err); 
});

//Error Handler
app.use(function(err, res, next){
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: (app.get('env') === 'development') ? err : {}
	})
})


// This is some Sequelize code.  Need to cover this with Josh for database use.
models.sequelize.sync({force: true}).then(function(){
	app.listen(port, function(){
		console.log("Listening on port: "+port);
	})
});

module.exports = app; 