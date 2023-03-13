const express = require('express');
const prodController = require('../controllers/productController.js');
const userController = require('../controllers/userController.js');
const router = express.Router();

/*PRODUCTS ROUTES*/
//GET PRODUCTS

router.get('/products', prodController.showProducts);
router.get('/product/:id', prodController.showProduct);

//ADD PRODUCTS

router.post('/product', prodController.addProduct);

//UPDATE PRODUCTS

router.put('/product/:id', prodController.updateProduct);

//DELETE PRODUCTS

router.delete('/product/:id', prodController.deleteProduct);


/*USERS ROUTES*/
//GET USERS

router.get('/users', userController.showUsers);
router.get('/user/:id', userController.showUser);

//ADD USERS

router.post('/register', userController.register);

//UPDATE USERS

router.put('/user/:id', userController.updateAccount);

//DELETE USERS

router.delete('/user/:id', userController.deleteUser);

module.exports = router;