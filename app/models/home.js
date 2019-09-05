module.exports = function() {

    this.getAll = function(connection, callback) {
        connection.query('SELECT * FROM news', callback);
    }

    return this;

}