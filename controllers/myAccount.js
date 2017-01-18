var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	

	res.sendFile('account1.html', { root: "public" });


});

module.exports = router; 