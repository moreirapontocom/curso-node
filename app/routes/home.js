var db = require('../../config/db');

module.exports = function(app) {

    app.get('/', function(req,res) {

        var connection = db();

        connection.query('SELECT * FROM news', function(err, result) {
            res.render('category/home', { news: result });
        });
    });

}