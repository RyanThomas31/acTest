const userModel = require('../models/userModel.js');

const showUsers = (req, res) => {
    userModel.getUsers((err, results) => {
        if (err) throw err;
        else {
            res.json(results);
        }
    })
}

const showUser = (req, res) => {
    userModel.getOneUser(req.params.id, (err, results) => {
        if (err) throw err;
        else {
            res.json(results);
        }
    })
}

const register = (req, res) => {
    const data = req.body;
    userModel.registerUser(data, (err, results) => {
        if (err) throw err;
        else {
            res.json(results);
        }
    })
}

const updateAccount = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    userModel.updateUser(data, id, (err, results) => {
        if (err) throw err;
        else {
            res.json(results);
        }
    })
}

const deleteUser = (req, res) => {
    const id = req.params.id;
    userModel.deleteAccount(id, (err, results) => {
        if (err) throw err;
        else {
            res.json(results);
        }
    })
}

module.exports = {showUsers, showUser, register, updateAccount, deleteUser}