var express = require('express');
var router = express.Router();
var multer  = require('multer');
var upload = multer({ dest: 'public/img/uploads/' });
var qr = require('qr-image');
var fs = require('fs');

var auth = require('../models/auth');
var FirstLevelCustomer = require('../models/firstLevelCustomer.js');

router.get('/', auth, function(req, res, next) {
    FirstLevelCustomer.find({}, function(err, customers){
        if (err) next(err);
        res.render('firstLevelCustomers/firstLevelCustomers', {
            customers: customers,
            layout: 'layout'
        });
    });
});

router.post('/', auth, function(req, res, next) {
    res.json({});
});

router.get('/add', auth, function(req, res, next) {
    res.render('firstLevelCustomers/form', {
        title: '添加一级客户',
        customer: {},
        layout: 'layout'
    });
});

router.post('/add', upload.single('passport_photo'), function(req, res, next) {
    req.body.passport_photo = req.file !== undefined? req.file.filename : "";
    FirstLevelCustomer.create(req.body, function(err, customer) {
        if (err) next(err);
        var code = qr.image(customer._id.toString(), { type: 'png' });
        var output = fs.createWriteStream('public/img/uploads/'+customer._id + '-qrcode.png')
        code.pipe(output);
        res.redirect('/firstLevelCustomers');
    });
});

router.get('/edit', auth, function(req, res, next) {
	FirstLevelCustomer.findById(req.query.id, function(err, customer) {
		if (err) next(err);
        res.render('firstLevelCustomers/form', {
	        title: '编辑一级客户',
	        customer: customer,
	        layout: 'layout'
	    });
	});
});

router.post('/edit', upload.single('passport_photo'), function(req, res, next) {
	FirstLevelCustomer.findById(req.query.id, function(err, customer) {
		if (err) next(err);
		if (req.file != undefined) {
			fs.unlink('public/img/uploads/' + customer.passport_photo);
			req.body.passport_photo = req.file.filename;
		} else {
			delete(req.body.passport_photo);
		}
	    FirstLevelCustomer.findOneAndUpdate({ _id: req.query.id }, req.body, function(err, customer) {
	        if (err) next(err);
	        res.redirect('/firstLevelCustomers');
	    });
	});
});

router.get('/remove', auth, function(req, res, next) {
	FirstLevelCustomer.findById(req.query.id, function(err, customer) {
		fs.unlink('public/img/uploads/' + customer.passport_photo);
		fs.unlink('public/img/uploads/' + customer._id + "-qrcode.png");
		FirstLevelCustomer.findByIdAndRemove(req.query.id, function(err, customer) {
	        if (err) next(err);
	        else {
	            res.redirect('/firstLevelCustomers');
	        }
	    });
	});
});

router.get('/barcode', auth, function(req, res, next) {
	FirstLevelCustomer.findById(req.query.id, function(err, customer) {
		customer.barcode = (Math.floor(Math.random() * (9999999999999 - 1000000000000 + 1)) + 1000000000000).toString();
		customer.barcode_start = new Date();
		FirstLevelCustomer.findOneAndUpdate({ _id: req.query.id }, customer, function(err, customer) {
	        if (err) next(err);
	        res.json(customer);
	    });
	});
});

module.exports = router;
