import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER, // Include the user field
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Test the database connection
db.getConnection()
  .then((connection) => {
    console.log('Database connected successfully');
    connection.release(); // Always release the connection after using it
  })
  .catch((err) => {
    console.error('Database connection error:', err.message);
  });

export default db;
