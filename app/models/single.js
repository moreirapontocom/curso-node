module.exports = function() {

    this.getSingle = function(connection, callback) {
        connection.query('SELECT * FROM news WHERE id = 1', callback);
    }

    return this;

}