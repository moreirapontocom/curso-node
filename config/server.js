var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));

// Should be placed here (before auto-loadings) because they're middlewares

app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

consign()
    .include('./app/routes')
    .then('./config/db.js')
    .then('./app/models')
    .then('./app/controllers')
    .into(app);

module.exports = app;