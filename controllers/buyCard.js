// var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	
	// insert link to buy Card html
	res.redirect('/buycard');

});

module.exports = router; 