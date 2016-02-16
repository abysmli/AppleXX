var mongoose = require('mongoose');
var setting = require('../setting.js');
mongoose.createConnection('mongodb://localhost/'+setting.database);

var ThirdLevelCustomerSchema = new mongoose.Schema({
    name: String,
    passport: String,
    sex: String,
    birthday: String,
    contact: String,
    others: String,
    parentId: String,
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ThirdLevelCustomer', ThirdLevelCustomerSchema);
