var express = require('express');
var path = require('path');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var compression = require('compression');

var app = express();
app.use(compression());
app.use(helmet());
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(morgan('dev'));
app.use(express.static('public'));

module.exports = app;