const express = require('express');
const prodController = require('../controllers/productController.js');
const router = express.Router();

//GET PRODUCTS

router.get('/products', prodController.showProducts);
router.get('/products/:id', prodController.showProduct);

//ADD PRODUCTS

router.post('/products', prodController.addProduct);

module.exports = router;