require('dotenv').config();
const app = require('./src/app')
const {PORT} = process.env;
const { conn } = require('./src/db');


const server = app.listen  (PORT, async () => {
    console.log(`Server raised in port: ${PORT}`)
    await conn.sync({force: false})
})

module.exports = server