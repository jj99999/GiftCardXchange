var models = require('../app/models');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	// res.sendFile('../public/home.html');

	// res.sendFile(__dirname + './public/home.html');

	res.sendFile('home.html', { root: "public" });

	// res.sendFile(path.join(__dirname, "../public/home.html"));

});

module.exports = router; 