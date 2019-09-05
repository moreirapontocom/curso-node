module.exports = function(app) {

    app.get('/add', function(req, res) {
        res.render('category/add');
    });

    app.post('/save', function(req, res) {
        var formData = req.body;

        req.assert('title', 'Title is required').notEmpty().len(10,255);
        req.assert('content', 'Content is required').notEmpty();
        req.assert('excerpt', 'Excerpt is required').notEmpty().len(4,255);
        req.assert('author', 'Author is required').notEmpty().len(4,100);
        req.assert('news_at', 'Date news is required').notEmpty().isDate({ format: 'YYYY-MM-DD' });

        var errors = req.validationErrors();
        if (errors) {
            res.render('category/add');
            return;
        }

        var connection = app.config.db;
        var addModel = new app.models.add(connection);

        addModel.save(formData, function(err, result) {
            res.redirect('/');
        });
    });

}