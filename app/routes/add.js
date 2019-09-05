module.exports = function(app) {

    app.get('/add', function(req, res) {
        app.controllers.addController.add(app, req, res);
    });

    app.post('/save', function(req, res) {
        app.controllers.addController.save(app, req, res);
    });

}