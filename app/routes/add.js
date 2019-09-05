module.exports = function(app) {

    app.get('/add', function(req, res) {
        res.render('category/add', { errors: '' });
    });

    app.post('/save', function(req, res) {
        var formData = req.body;

        req.assert('title', 'Title is required').notEmpty()
        req.assert('title', 'Title length is 10,255').len(10,255);
        req.assert('content', 'Content is required').notEmpty();
        req.assert('excerpt', 'Excerpt is required').notEmpty();
        req.assert('author', 'Author is required').notEmpty();
        req.assert('news_at', 'Date news is required').notEmpty().isDate({ format: 'YYYY-MM-DD' });

        var errors = req.validationErrors();
        console.log(errors);
        if (errors) {
            res.render('category/add', { errors: errors });
            return;
        }

        var connection = app.config.db;
        var addModel = new app.models.add(connection);

        addModel.save(formData, function(err, result) {
            res.redirect('/');
        });
    });

}