module.exports = function(app) {

    app.get('/', function(req,res) {

        var mysql = require('mysql');

        var connection = mysql.createConnection({
            host: 'node_mysql',
            user: 'root',
            password: 'root',
            database: 'curso_node'
        });

        connection.query('SELECT * FROM news', function(err, result) {
            // res.render('category/home');
            res.send(result);
        });
    });

}