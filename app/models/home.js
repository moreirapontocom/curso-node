function Home(connection) {

    this._connection = connection

    // Method 1
    // this.getAll = function(connection, callback) {
    //     connection.query('SELECT * FROM news', callback);
    // }
}

// Method 2
Home.prototype.getAll = function(callback) {
    this._connection.query('SELECT * FROM news', callback);
}

module.exports = function() {
    return Home;
}