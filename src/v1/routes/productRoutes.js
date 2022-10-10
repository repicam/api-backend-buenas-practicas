const express = require("express");
const router = express.Router();

router
    .get("/", (req, res) => {
        res.send(`<h1>¡Get all products!</h1>`)
    })
    .get("/:productId", (req, res) => {
        res.send(`<h1>¡Get product ${req.params.id}!</h1>`)
    })
    .post("/", (req, res) => {
        res.send(`<h1>Create product!</h1>`)
    })
    .patch("/:productId", (req, res) => {
        res.send(`<h1>¡Update product ${req.params.id}!</h1>`)
    })
    .delete("/:productId", (req, res) => {
        res.send(`<h1>¡Delete product ${req.params.id}!</h1>`)
    });

module.exports = router;