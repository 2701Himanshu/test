const router = require('express').Router();
const controller = require('../controllers/products');

router.post('/products', controller.addProduct);
router.get('/products', controller.listProduct);
router.patch('/products/:id', controller.publishProduct);

module.exports = router;
