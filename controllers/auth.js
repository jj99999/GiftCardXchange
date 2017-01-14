// var models = require('../models');
var express = require('express');
var router = express.Router();

// need to know the right name for this auth route
router.get('/', function(req, res){
	// insert  passport auth code here
	
	res.redirect('/signin');
});

module.exports = router; 