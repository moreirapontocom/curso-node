module.exports.home = function(app, req, res) {
    var connection = app.config.db;
    var homeModel = new app.models.home(connection);

    homeModel.getAll(function(err, result) {
        res.render('category/home', { news: result });
    });
}