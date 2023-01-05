const Pool = require('pg').Pool;

const pool = new Pool({
 user: "postgres",
 password: "Bendaniyassine1?",
 database: "restaurant",
 host: "localhost",
 port: 5432
});

module.exports = pool;