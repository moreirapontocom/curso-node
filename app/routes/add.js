module.exports = function(app) {

    app.get('/add', function(req, res) {
        res.render('category/add');
    });

    app.post('/save', function(req, res) {
        var formData = req.body;

        var connection = app.config.db;
        var addModel = new app.models.add(connection);

        addModel.save(formData, function(err, result) {
            res.redirect('/');
        });
    });

}