function Single(connection) {
    this._connection = connection;
}

Single.prototype.getSingle = function(callback) {
    this._connection.query('SELECT * FROM news WHERE id = 1', callback);
}

module.exports = function() {
    return Single;
}