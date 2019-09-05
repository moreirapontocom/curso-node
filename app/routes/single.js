module.exports = function(app) {

    app.get('/single', function(req, res) {

        var connection = app.config.db;
        var singleModel = app.models.single;
        
        singleModel.getSingle(connection, function(err, result) {
            res.render('category/single', { item: result });
        });
        
    });

}