module.exports = function(app) {

    app.get('/add', function(req, res) {
        res.render('category/add');
    });

    app.post('/save', function(req, res) {
        var formData = req.body;
        res.send(formData);
    });

}