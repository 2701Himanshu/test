const Products = require('../models/products');
let { ProductModel } = require('../models/products');

exports.addProduct = async (req, res) => {
    try {
        let { name, price, mrp, stock, isPublished } = req.body;
        isPublished = false;

        let product_id; 
        let prod = await ProductModel.findOne({}); 

        if(!prod) product_id = 1;
        else product_id = prod.product_id + 1;

        let dataToSend = {
            name, price, mrp, stock, product_id, isPublished : false
        }

        let product = await ProductModel.create(dataToSend);
        if (!product) {
            throw new Error("Something went wrong, please try again later");
        }
        res.status(201).json({ response: product, message: "Product added successfully." });
    } catch (err) {
        res.status(403).json({ message: err.message });
    }
};

exports.listProduct = async (req, res) => {
    try {
        let product = await ProductModel.find({}).sort({product_id : 1}); 
        
        res.status(200).json({ response: product, message: "Product list." });
    } catch (err) {
        res.status(403).json({ message: err.message });
    }
};

exports.publishProduct = async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        let product = await ProductModel.findOne({product_id: id}); 

        let error = [];
        if(product.mrp >= product.price){
            error.push("MRP should be less than or equal to price.")
        }
        if(product.stock <= 0){
            error.push("Stock count is 0.")
        }

        if(error.length) throw new Error(error);

        let product1 = await ProductModel.findOneAndUpdate({product_id: id}, {
            $set: { isPublished: true, updated_at: new Date().getTime() }
        }); 
        
        res.status(204).json({ errors: error, message: "Product published successfully." });
    } catch (err) {
        let error = err.message.split(',');
        res.status(422).json({ errors: error });
    }
};