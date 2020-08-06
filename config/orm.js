var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
    selectAll: (table, cb) => {
        let queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: (table, cols, vals, cb) => {
        let queryString = `INSERT INTO ${table} (${cols}) VALUES ("${vals}");`;
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: (table, objColVals, condition, cb) => {
        let queryString = `UPDATE ${table} SET ${objColVals} WHERE ${condition};`;
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;