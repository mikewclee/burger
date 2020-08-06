var orm = require("../config/orm.js");

var burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (res) => cb(res));
    },
    insertOne: (vals, cb) => {
        orm.insertOne("burgers", "burger_name", vals, (res) => cb(res));
    },
    updateOne: (objColVals, condition, cb) => {
        orm.updateOne("burgers", objColVals, condition, (res) => cb(res));
    }
};

module.exports = burger;