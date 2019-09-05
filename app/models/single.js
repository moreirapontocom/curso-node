function Single(connection) {
    this._connection = connection;
}

Single.prototype.getSingle = function(id, callback) {
    this._connection.query('SELECT * FROM news WHERE id = ' + id.id, callback);
}

module.exports = function() {
    return Single;
}