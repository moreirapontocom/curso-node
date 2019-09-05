module.exports = function(app) {

    app.get('/add', function(req, res) {
        res.render('category/add');
    });

}