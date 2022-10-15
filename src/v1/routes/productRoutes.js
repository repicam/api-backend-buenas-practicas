const express = require("express");
const router = express.Router();
const productController = require("../../controllers/productController");
const recordController = require("../../controllers/recordController");

router
    .get("/", productController.getAllProducts)
    .get("/records", recordController.getAllRecords)
    .get("/:productId", productController.getOneProduct)
    .get("/:productId/records", recordController.getRecordByProduct)
    .post("/", productController.createNewProduct)
    .patch("/:productId", productController.updateOneProduct)
    .delete("/:productId", productController.deleteOneProduct);

module.exports = router;