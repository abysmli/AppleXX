var express = require('express');
var router = express.Router();

var FirstLevelCustomer = require('../models/firstLevelCustomer.js');
var SecondLevelCustomer_person = require('../models/secondLevelCustomer-person.js');
var SecondLevelCustomer_shop = require('../models/secondLevelCustomer-shop.js');
var ThirdLevelCustomer = require('../models/thirdLevelCustomer.js');

/* GET home page. */
router.get('/getFirstLevelCustomer', function(req, res, next) {
	console.log(req.query);
	FirstLevelCustomer.findById(req.query.id, function(err, customer) {
		if (err) res.send('error');
		res.json(customer);
	});
});


module.exports = router;
