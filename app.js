var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/tecnologia', function(req,res) {
    res.render('category/tecnologia');
});

app.get('/moda', function(req,res) {
    res.render('category/moda');
});

app.get('/', function(req,res) {
    res.render('category/home');
});

app.listen(4200, function() {
    console.log('Server is running...');
});