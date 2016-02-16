var mongoose = require('mongoose');
var setting = require('../setting.js');
mongoose.createConnection('mongodb://localhost/'+setting.database);

var SecondLevelCustomerShopSchema = new mongoose.Schema({
    name: String,
    address: String,
    brand: String,
    email: String,
    tax: String,
    contact: String,
    desc: String,
    message: String,
    type: String,
    others: String,
    photos: String,
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SecondLevelCustomerShop', SecondLevelCustomerShopSchema);