var mysql = require('mysql');

module.exports = function() {

    return mysql.createConnection({
        host: 'node_mysql',
        user: 'root',
        password: 'root',
        database: 'curso_node'
    });

}