module.exports = function(app) {

    app.get('/single', function(req, res) {

        var connection = app.config.db;
        var singleModel = new app.models.single(connection);

        var id = req.query;

        singleModel.getSingle(id, function(err, result) {
            res.render('category/single', { item: result });
        });
        
    });

}