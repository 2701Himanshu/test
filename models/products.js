// const {Sequelize, DataTypes, DOUBLE} = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:");

var { mongoose, conn } = require('../connection');

const productSchema = new mongoose.Schema({
  product_id: {
    type: Number
  },
  name: {
    type: String,
    require: true 
  },
  price: {
    type: Number,
    require: true
  },
  mrp: {
    type: Number,
    require: true
  },
  stock: {
    type: Number,
    require: true
  },
  isPublished: {
    type: Boolean,
    default: false,
    require: true
  },
  created_at: {
    type: Number,
    default: new Date().getTime() 
  },
  updated_at: {
    type: Number,
    default: new Date().getTime() 
  }
},
  {
    strict: true,
    collection: 'products',
    versionKey: false
  }
);

exports.ProductModel = mongoose.model('products', productSchema);