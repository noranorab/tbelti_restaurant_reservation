const Pool = require('pg').Pool;

const pool = new Pool({
 user: "postgres",
 password: "",
 database: "",
 host: "localhost",
 port: 
});

module.exports = pool;
