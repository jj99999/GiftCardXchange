var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.sendFile('../public/home.html');
});

module.exports = router; 