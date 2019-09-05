var express = require('express');
var app = express();
var consign = require('consign');

app.set('view engine', 'ejs');
app.set('views', './app/views');

consign()
    .include('./app/routes')
    .then('./config/db.js')
    .then('./app/models')
    .into(app);

module.exports = app;