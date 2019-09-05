module.exports = function() {

    this.save = function(connection, formData, callback) {
        connection.query('INSERT INTO news SET ?', formData, callback);
    }

    return this;

}