const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

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
        res.json({ id: result.inserId});
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

module.exports = router;