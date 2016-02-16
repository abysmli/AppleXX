var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var partials = require('express-partials');
var session = require('express-session');

var routes = require('./routes/index');
var users = require('./routes/users');
var firstLevelCustomers = require('./routes/firstLevelCustomers');
var secondLevelCustomers_person = require('./routes/secondLevelCustomers-person');
var secondLevelCustomers_shop = require('./routes/secondLevelCustomers-shop');
var thirdLevelCustomers = require('./routes/thirdLevelCustomers');
var appAPIs = require('./routes/appAPIs');

var setting = require('./setting');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    extended: false,
    limit: '50mb'
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(partials());

app.use('/', routes);
app.use('/firstLevelCustomers', firstLevelCustomers);
app.use('/secondLevelCustomers-person', secondLevelCustomers_person);
app.use('/secondLevelCustomers-shop', secondLevelCustomers_shop);
app.use('/thirdLevelCustomers', thirdLevelCustomers);
app.use('/appAPIs', appAPIs);
app.use('/users', users);
app.use(session({
    secret: setting.secret,
    key: "F&&L",
    cookie: {
        secure: false
    },
    resave: true,
    saveUninitialized: true
}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
