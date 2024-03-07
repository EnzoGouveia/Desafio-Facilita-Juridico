const Client = require('pg').Pool;

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "123456",
    database: "test-facilita"
})

module.exports = client