const express = require('express');
const prodController = require('../controllers/productController.js');
const router = express.Router();

/*PRODUCTS ROUTES*/
//GET PRODUCTS

router.get('/products', prodController.showProducts);
router.get('/products/:id', prodController.showProduct);

//ADD PRODUCTS

router.post('/products', prodController.addProduct);

//UPDATE PRODUCTS

router.put('/products/:id', prodController.updateProduct);

//DELETE PRODUCTS

router.delete('/products/:id', prodController.deleteProduct);


/*USERS ROUTES*/

module.exports = router;