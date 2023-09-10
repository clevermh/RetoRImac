const mysql = require('mysql');

const configDB ={
    connectionLimit: 10,
    host: 'bddevlatam.cpwt9rgfbfkw.us-east-1.rds.amazonaws.com',
    user: 'root',
    password: 'Latam2023',
    port: '3306',
    database: 'DBDEMO', 
    debug: true 
};

var  pool = mysql.createPool(configDB);
// pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if(error){
//     console.log('Error Conexion correcta.');
//  }else{
//     console.log('Conexion correcta.');
//  }
    
//   });
module.exports = pool;