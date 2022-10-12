const productService = require("../services/productService");

const getAllProducts = (req, res) => {
    const allProducts = productService.getAllProducts();
    res.send({
        status: "OK",
        data: allProducts
    });
};

const getOneProduct = (req, res) => {
    const product = productService.getOneProduct(req.params.productId);
    res.send({
        status: "OK",
        data: product != undefined ? product : null
    });
};

const createNewProduct = (req, res) => {
    const { body } = req;

    if (!body.title || !body.description || !body.price || !body.rating || !body.stock || !body.category){
        res.status(400).send({
            status: "KO",
            error: "Faltan datos obligatorios"
        });
        return;
    }

    const newProduct = {
        title: body.title,
        description: body.description,
        price: body.price,
        discountPercentage: body.discountPercentage,
        rating: body.rating,
        stock: body.stock,
        brand: body.brand,
        category: body.category,
        thumbnail: body.thumbnail,
        images: body.images,
    };

    const createdProduct = productService.createNewProduct(newProduct);
    if (createdProduct.error != undefined){
        res.status(400).send({
            status: "KO",
            error: "Titulo ya existe en la lista de productos"
        });
    }
    
    res.status(201).send({
        status: "OK",
        data: createdProduct
    });
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