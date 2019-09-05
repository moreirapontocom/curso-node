var app = require('./config/server');

var route_home = require('./app/routes/home');
route_home(app)

var route_moda = require('./app/routes/moda')(app);
var route_tecnologia = require('./app/routes/tecnologia')(app);

app.listen(4200, function() {
    console.log('Server is running...');
});