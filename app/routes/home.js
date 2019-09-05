module.exports = function(app) {

    app.get('/', function(req,res) {

        var connection = app.config.db;
        var homeModel = app.models.home;

        homeModel.getAll(connection, function(err, result) {
            res.render('category/home', { news: result });
        });
    });

}