var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	
	// insert link to ADD credit Card html
	res.redirect('/addcreditcard');

});

module.exports = router; 