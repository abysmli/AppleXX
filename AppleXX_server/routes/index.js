var express = require('express');
var router = express.Router();
var auth = require('../models/auth');

var FirstLevelCustomer = require('../models/firstLevelCustomer.js');
var SecondLevelCustomer_person = require('../models/secondLevelCustomer-person.js');
var SecondLevelCustomer_shop = require('../models/secondLevelCustomer-shop.js');
var ThirdLevelCustomer = require('../models/thirdLevelCustomer.js');

/* GET home page. */
router.get('/', auth, function(req, res, next) {
	FirstLevelCustomer.count({}, function(err, firstCount){
		SecondLevelCustomer_person.count({}, function(err, secondCount_person){
			SecondLevelCustomer_shop.count({}, function(err, secondCount_shop){
				ThirdLevelCustomer.count({}, function(err, thirdCount){
				    res.render('index', {
				    	count: {
				    		firstCount: firstCount,
				    		secondCount_person: secondCount_person,
				    		secondCount_shop: secondCount_shop,
				    		thirdCount: thirdCount
				    	},
				        layout: 'layout'
				    });
				});
			});
		});
	});
});


module.exports = router;
