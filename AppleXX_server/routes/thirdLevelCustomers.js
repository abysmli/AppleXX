var express = require('express');
var router = express.Router();

var auth = require('../models/auth');
var ThirdLevelCustomer = require('../models/thirdLevelCustomer.js');

router.get('/', auth, function(req, res, next) {
    ThirdLevelCustomer.find({}, function(err, customers){
        if (err) next(err);
        res.render('thirdLevelCustomers/thirdLevelCustomers', {
            customers: customers,
            layout: 'layout'
        });
    });
});

router.post('/', auth, function(req, res, next) {
    res.json({});
});

router.get('/add', auth, function(req, res, next) {
    res.render('thirdLevelCustomers/form', {
        title: '添加三级客户',
        customer: {parentId: req.query.parentId},
        layout: 'layout'
    });
});

router.post('/add', auth, function(req, res, next) {
    ThirdLevelCustomer.create(req.body, function(err, customer) {
        if (err) next(err);
        res.redirect('/thirdLevelCustomers');
    });
});

router.get('/edit', auth, function(req, res, next) {
	ThirdLevelCustomer.findById(req.query.id, function(err, customer) {
		if (err) next(err);
        res.render('thirdLevelCustomers/form', {
	        title: '编辑三级客户',
	        customer: customer,
	        layout: 'layout'
	    });
	});
});

router.post('/edit', auth, function(req, res, next) {
	ThirdLevelCustomer.findOneAndUpdate({ _id: req.query.id }, req.body, function(err, customer) {
	    if (err) next(err);
	    res.redirect('/thirdLevelCustomers');
	});
});

router.get('/remove', auth, function(req, res, next) {
	ThirdLevelCustomer.findByIdAndRemove(req.query.id, function(err, customer) {
	    if (err) next(err);
	    else {
	        res.redirect('/thirdLevelCustomers');
	    }
	});
});

module.exports = router;
