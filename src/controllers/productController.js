const productService = require("../services/productService");

const getAllProducts = (req, res) => {
    const allProducts = productService.getAllProducts();
    res.send(`<h1>¡Get all products!</h1>`);
};

const getOneProduct = (req, res) => {
    const product = productService.getOneProduct(req.params.productId);
    res.send(`<h1>¡Get product ${req.params.productId}!</h1>`);
};

const createNewProduct = (req, res) => {
    const createdProduct = productService.createNewProduct(req.body);
    res.send(`<h1>Create product!</h1>`);
};

const updateOneProduct = (req, res) => {
    const updatedProduct = productService.updateOneProduct(req.params.productId, req.body);
    res.send(`<h1>¡Update product ${req.params.productId}!</h1>`);
};

const deleteOneProduct = (req, res) => {
    const deletedProduct = productService.deleteOneProduct(req.params.productId);
    res.send(`<h1>¡Delete product ${req.params.productId}!</h1>`);
};

module.exports = {
    getAllProducts,
    getOneProduct,  
    createNewProduct, 
    updateOneProduct, 
    deleteOneProduct
};