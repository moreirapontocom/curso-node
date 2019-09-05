var express = require('express');
var app = express();

app.get('/tecnologia', function(req,res) {
    res.send('Noticias de Tecnologia');
});

app.get('/moda', function(req,res) {
    res.send('Noticias de Moda');
});

app.get('/', function(req,res) {
    res.send('Índice de Noticias');
});

app.listen(4200, function() {
    console.log('Server is running...');
});