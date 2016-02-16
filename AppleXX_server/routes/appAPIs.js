var express = require('express');
var router = express.Router();

var FirstLevelCustomer = require('../models/firstLevelCustomer.js');
var SecondLevelCustomer_person = require('../models/secondLevelCustomer-person.js');
var SecondLevelCustomer_shop = require('../models/secondLevelCustomer-shop.js');
var ThirdLevelCustomer = require('../models/thirdLevelCustomer.js');

router.get('/login', function(req, res, next) {
	FirstLevelCustomer.findOne({
		email: req.query.email,
		password: req.query.password
	}, function(err, customer) {
		if (err) res.send('error');
		res.json(customer);
	});
});



router.get('/getFirstLevelCustomer', function(req, res, next) {
	FirstLevelCustomer.findById(req.query.id, function(err, customer) {
		if (err) res.send('error');
		res.json(customer);
	});
});


module.exports = router;
