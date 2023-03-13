const prodModel = require('../models/productModel.js');

const showProducts = (req, res) => {
    prodModel.getAllProducts((err, results) => {
        if (err) throw err;
        else {
            res.json(results);
        }
    })
}

const showProduct = (req, res) => {
    prodModel.getOneProduct(req.params.id, (err, results) => {
        if (err) throw err;
        else {
            res.json(results);
        }
    })
}

const addProduct = (req, res) => {
    const data = req.body;
    prodModel.addOneProduct(data, (err, results) => {
        if (err) throw err;
        else {
            res.json(results);
        }
    })
}

module.exports = {showProducts, showProduct, addProduct}