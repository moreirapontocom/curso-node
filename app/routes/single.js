module.exports = function(app) {

    app.get('/single', function(req, res) {

        var connection = app.config.db;

        connection.query('SELECT * FROM news WHERE id = 1', function(err, result) {
            res.render('category/single', { item: result });
        });
    });

}