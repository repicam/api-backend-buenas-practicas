const express = require("express");
const apicache = require("apicache");
const productController = require("../../controllers/productController");
const recordController = require("../../controllers/recordController");

const router = express.Router();
const cache = apicache.middleware;

router
/**
 * @openapi
 * /api/v1/products:
 *   get:
 *     tags:
 *       - Products
 *     parameters:
 *       - in: query
 *         name: brand
 *         schema:
 *           type: string
 *         description: The brand of a product
 *     
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Product"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */
    .get("/",cache("2 minutes"), productController.getAllProducts)
    .get("/records", recordController.getAllRecords)
    .get("/:productId", productController.getOneProduct)
    .get("/:productId/records", recordController.getRecordByProduct)
    .post("/", productController.createNewProduct)
    .patch("/:productId", productController.updateOneProduct)
    .delete("/:productId", productController.deleteOneProduct);

module.exports = router;