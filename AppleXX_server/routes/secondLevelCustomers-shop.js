var express = require('express');
var router = express.Router();

var auth = require('../models/auth');
var SecondLevelCustomer_shop = require('../models/secondLevelCustomer-shop.js');

router.get('/', auth, function(req, res, next) {
    SecondLevelCustomer_shop.find({}, function(err, customers){
        if (err) next(err);
        res.render('secondLevelCustomers-shop/secondLevelCustomers-shop', {
            customers: customers,
            layout: 'layout'
        });
    });
});

router.post('/', auth, function(req, res, next) {
    res.json({});
});

router.get('/add', auth, function(req, res, next) {
    res.render('secondLevelCustomers-shop/form', {
        title: '添加二级客户 - 店铺',
        customer: {},
        layout: 'layout'
    });
});

router.post('/add', auth, function(req, res, next) {
    SecondLevelCustomer_shop.create(req.body, function(err, customer) {
        if (err) next(err);
        res.redirect('/secondLevelCustomers-shop');
    });
});

router.get('/edit', auth, function(req, res, next) {
    SecondLevelCustomer_shop.findById(req.query.id, function(err, customer) {
        if (err) next(err);
        res.render('secondLevelCustomers-shop/form', {
            title: '编辑二级客户 - 店铺',
            customer: customer,
            layout: 'layout'
        });
    });
});

router.post('/edit', auth, function(req, res, next) {
    SecondLevelCustomer_shop.findOneAndUpdate({ _id: req.query.id }, req.body, function(err, customer) {
        if (err) next(err);
        res.redirect('/secondLevelCustomers-shop');
    });
});

router.get('/remove', auth, function(req, res, next) {
    SecondLevelCustomer_shop.findByIdAndRemove(req.query.id, function(err, customer) {
        if (err) next(err);
        else {
            res.redirect('/secondLevelCustomers-shop');
        }
    });
});

module.exports = router;
