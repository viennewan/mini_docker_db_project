var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'db',
    database: 'test',
    port: '3306',
    user: 'root',
    password: 'test',
    connectionLimit: 10
});

function numberOfFiles() {
    
  connection.connect();
  
  return new Promise(function(resolve, reject) {
      connection.query('select * from Files', (err, rows) => {
          if(err) {
            return reject(err);
          }
          resolve(rows.length);
      });
      connection.end();
  });
  
}
module.exports = numberOfFiles;