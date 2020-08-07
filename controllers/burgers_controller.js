const express = require("express");
const burger = require("../models/burger.js");

var router = express.Router();

router.get("/", (req, res) => {
    burger.selectAll((data) => {
        var burgerObject = {
            burger: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.insertOne(req.body.name, (result)=> {
        res.json({ id: result.insertId});
    });
});

router.put("/api/burgers/:id", (req, res) => {
    let condition = `id=${req.params.id}`;
    console.log(`condition: ${condition}`);
    burger.updateOne("devoured=true", condition, (result) => {
        if (result.changeRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    })
});

router.delete("/api/burgers/:id", (req,res) => {
    let condition = `id=${req.params.id}`;
    burger.delete(condition, (result) => {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        }else {
            res.status(200).end();
        }
    });
});

module.exports = router;