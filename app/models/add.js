function Add(connection) {
    this._connection = connection;
}

Add.prototype.save = function(formData, callback) {
    this._connection.query('INSERT INTO news SET ?', formData, callback);
}

module.exports = function() {
    return Add;
}