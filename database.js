const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'vittusaatana',
  database: 'test_db'
});
module.exports = connection;