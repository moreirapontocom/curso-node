var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', './app/views');

// Should be placed here (before auto-loadings) because it's a middleware
app.use(bodyParser.urlencoded({ extended: true }));

consign()
    .include('./app/routes')
    .then('./config/db.js')
    .then('./app/models')
    .into(app);

module.exports = app;