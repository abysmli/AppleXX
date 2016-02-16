var express = require('express');
var router = express.Router();

var auth = require('../models/auth');
var SecondLevelCustomer_person = require('../models/secondLevelCustomer-person.js');

router.get('/', auth, function(req, res, next) {
    SecondLevelCustomer_person.find({}, function(err, customers){
        if (err) next(err);
        res.render('secondLevelCustomers-person/secondLevelCustomers-person', {
            customers: customers,
            layout: 'layout'
        });
    });
});

router.post('/', auth, function(req, res, next) {
    res.json({});
});

router.get('/add', auth, function(req, res, next) {
    res.render('secondLevelCustomers-person/form', {
        title: '添加二级客户 - 个体',
        customer: {},
        layout: 'layout'
    });
});

router.post('/add', auth, function(req, res, next) {
    SecondLevelCustomer_person.create(req.body, function(err, customer) {
        if (err) next(err);
        res.redirect('/secondLevelCustomers-person');
    });
});

router.get('/edit', auth, function(req, res, next) {
	SecondLevelCustomer_person.findById(req.query.id, function(err, customer) {
		if (err) next(err);
        res.render('secondLevelCustomers-person/form', {
	        title: '编辑二级客户 - 个体',
	        customer: customer,
	        layout: 'layout'
	    });
	});
});

router.post('/edit', auth, function(req, res, next) {
	SecondLevelCustomer_person.findOneAndUpdate({ _id: req.query.id }, req.body, function(err, customer) {
	    if (err) next(err);
	    res.redirect('/secondLevelCustomers-person');
	});
});

router.get('/remove', auth, function(req, res, next) {
	SecondLevelCustomer_person.findByIdAndRemove(req.query.id, function(err, customer) {
	    if (err) next(err);
	    else {
	        res.redirect('/secondLevelCustomers-person');
	    }
	});
});

module.exports = router;
