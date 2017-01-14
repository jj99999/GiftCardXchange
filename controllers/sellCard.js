// var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	
	// insert link to sell Card html
	res.redirect('/sellcard');

});

module.exports = router; 