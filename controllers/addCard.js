var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	
	// insert link to ADD Card html
	res.redirect('/addcard');

});

module.exports = router; 