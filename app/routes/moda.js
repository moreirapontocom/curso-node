module.exports = function(app) {

    app.get('/moda', function(req,res) {
        res.render('category/moda');
    });

}