const express = require("express");
const apicache = require("apicache");
const productController = require("../../controllers/productController");
const recordController = require("../../controllers/recordController");

const router = express.Router();
const cache = apicache.middleware;

router
    .get("/",cache("2 minutes"), productController.getAllProducts)
    .get("/records", recordController.getAllRecords)
    .get("/:productId", productController.getOneProduct)
    .get("/:productId/records", recordController.getRecordByProduct)
    .post("/", productController.createNewProduct)
    .patch("/:productId", productController.updateOneProduct)
    .delete("/:productId", productController.deleteOneProduct);

module.exports = router;