var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/createaccount', function(req, res){
	// res.sendFile('../public/home.html');

	// res.sendFile(__dirname + './public/home.html');

	res.sendFile('register.html', { root: "public" });

	// res.sendFile(path.join(__dirname, "../public/home.html"));

});

module.exports = router; 