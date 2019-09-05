module.exports = function(app) {

    app.get('/tecnologia', function(req,res) {
        res.render('category/tecnologia');
    });

}