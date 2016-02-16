var mongoose = require('mongoose');
var setting = require('../setting.js');
mongoose.createConnection('mongodb://localhost/'+setting.database);

var SecondLevelCustomerPersonSchema = new mongoose.Schema({
    name: String,
    sex: String,
    birthday: String,
    type: String,
    contact: String,
    language: String,
    national: String,
    passport: String,
    others: String,
    work: String,
    photos: String,
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SecondLevelCustomerPerson', SecondLevelCustomerPersonSchema);
