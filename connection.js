// const {Sequelize} = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:");
// const Products = require('./models/products');

// return sequelize.authenticate()
//     .then(result => {
//         console.log(`SQLite successfully connected!`);
//         return Products.sync();
//     })
//     .then(result => {
//         console.log(`Products table created`);
//         return result;
//     })
//     .catch(error => {
//         console.error('Unable to connect to SQLite database:', error);
//     })

const mongoose = require('mongoose');

// local connection
const conn = mongoose.connect('mongodb://127.0.0.1:27017/test', {
    useNewUrlParser: true
});

exports.mongoose = mongoose;
exports.conn = conn;