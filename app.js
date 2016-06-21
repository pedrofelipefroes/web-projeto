var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
var flash = require('connect-flash');
var db = require('./db');

var routes = require('./routes/index');
var users = require('./routes/users');
var championship = require('./routes/championship');

var app = express();

app.set('views', path.join(__dirname));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname)));

app.use(methodOverride('_method', { methods: ['GET', 'POST'] }));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/championship', championship);

module.exports = app;
