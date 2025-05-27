const username = 'admin';
const password = 'test1234';
const host = '172.28.0.3';
const port = '27017';
const database = 'mydb';  

const connectionString = `mongodb://${username}:${password}@${host}:${port}/${database}?authSource=admin`;

module.exports = connectionString;
