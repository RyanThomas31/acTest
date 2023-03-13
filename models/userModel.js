const db = require('../config/database.js');

const getUsers = (result) => {
    var getAllUsersQuery = "SELECT * FROM users";
    db.query(getAllUsersQuery, (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results)
        }
    })
}

const getOneUser = (id, result) => {
    var getOneQuery = "SELECT * FROM users WHERE id = ?";
    db.query(getOneQuery, [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results)
        }
    })
}

const registerUser = (data, result) => {
    var registerQuery = "INSERT INTO users SET ?";
    db.query(registerQuery, [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results)
        }
    })
}

const updateUser = (data, id, result) => {
    var userUpdateQuery = "UPDATE users SET ? WHERE id = ?";
    db.query(userUpdateQuery, [data, id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results)
        }
    })
}

const deleteAccount = (id, result) => {
    var deleteUserQuery = "DELETE FROM users WHERE id = ?";
    db.query(deleteUserQuery, [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results)
        }
    })
}

module.exports = {getUsers, getOneUser, registerUser, updateUser, deleteAccount}