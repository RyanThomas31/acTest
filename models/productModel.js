const db = require('../config/database.js');


const getAllProducts = (result) => {
    var getAllQuery = "SELECT * FROM products";
    db.query(getAllQuery, (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results)
        }
    })
}

const getOneProduct = (id, result) => {
    var getOneQuery = "SELECT * FROM products WHERE id = ?";
    db.query(getOneQuery, [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results)
        }
    })
}

const addOneProduct = (data, result) => {
    var addOneQuery = "INSERT INTO products SET ?";
    db.query(addOneQuery, [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results)
        }
    })
}

const editProduct = (data, id, result) => {
    var updateQuery = "UPDATE products SET ? WHERE id = ?";
    db.query(updateQuery, [data, id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results)
        }
    } )
    
}

const removeProduct = (id, result) => {
    var deleteQuery = "DELETE FROM products WHERE id = ?";
    db.query(deleteQuery, [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results)
        }
    })
}

module.exports = {getAllProducts, getOneProduct, addOneProduct, editProduct, removeProduct}