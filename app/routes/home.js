module.exports = function(app) {

    app.get('/', function(req,res) {

        var connection = app.config.db;

        connection.query('SELECT * FROM news', function(err, result) {
            res.render('category/home', { news: result });
        });
    });

}