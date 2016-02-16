var mongoose = require('mongoose');
var setting = require('../setting.js');
mongoose.connect('mongodb://localhost/' + setting.database);

var FirstLevelCustomerSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    phone: String,
    city: String,
    zip: String,
    address: String,
    national: String,
    passport: String,
    sex: String,
    passport_photo: String,
    barcode: { type: String, default: "" },
    barcode_start: { type: Date },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('FirstLevelCustomer', FirstLevelCustomerSchema);
