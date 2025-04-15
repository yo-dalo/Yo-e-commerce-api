const mysql = require('mysql2');
const config = require('../config/env');

const isProduction = config.deploy === 'deploy';

const db = mysql.createPool({
  host: !isProduction ? "127.0.0.1" : config.host,
  user: !isProduction ? "root" : config.user,
  password: !isProduction ? "root" : config.password,
  database: !isProduction ? 'yo_ecomm_v7' : config.database,
  connectionLimit: 500,
  waitForConnections: true,
  queueLimit: 0,
  connectTimeout: 30000 // Use this instead of acquireTimeout
});

// Improved connection handling
db.getConnection((err, connection) => {
  if (err) {
    console.error(`Database Connection Error: ${err.code}`);

    switch (err.code) {
      case 'PROTOCOL_CONNECTION_LOST':
        console.error('Database connection was closed.');
        break;
      case 'ER_CON_COUNT_ERROR':
        console.error('Database has too many connections.');
        break;
      case 'ECONNREFUSED':
        console.error('Database connection was refused.');
        break;
      case 'ETIMEDOUT':
        console.error('Database connection timed out.');
        break;
      default:
        console.error('Unexpected database error:', err);
    }
  }

  if (connection) connection.release();
});

// Graceful shutdown handling
process.on('SIGINT', () => {
  console.log('Closing database connection pool...');
  db.end((err) => {
    if (err) console.error('Error closing database connection:', err);
    else console.log('Database connection pool closed.');
    process.exit(0);
  });
});

module.exports = db;