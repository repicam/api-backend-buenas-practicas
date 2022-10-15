const productService = require("../services/productService");

const getAllProducts = (req, res) => {
    const allProducts = productService.getAllProducts();
    res.status(201).send({
        status: "OK",
        data: allProducts
    });
};

const getOneProduct = (req, res) => {
    const { params: {productId} } = req;

    if (!productId){
        res.status(400).send({
            status: "KO",
            error: "Se debe pasar un identificador por parámetro para buscar"
        });
        return;
    }

    const product = productService.getOneProduct(productId);
    res.status(201).send({
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
    if (createdProduct.errorMsg != undefined){
        res.status(400).send({
            status: "KO",
            error: createdProduct.errorMsg
        });
    }
    
    res.status(201).send({
        status: "OK",
        data: createdProduct
    });
};

const updateOneProduct = (req, res) => {
    const { body, params: {productId} } = req;

    if (!productId){
        res.status(400).send({
            status: "KO",
            error: "Se debe pasar un identificador por parámetro para modificar"
        });
        return;
    }

    const updatedProduct = productService.updateOneProduct(productId, body);
    if (updatedProduct.errorMsg != undefined){
        res.status(400).send({
            status: "KO",
            error: updatedProduct.errorMsg
        });
    }

    res.status(201).send({
        status: "OK",
        data: updatedProduct
    });
};

const deleteOneProduct = (req, res) => {
    const { params: {productId} } = req;

    if (!productId){
        res.status(400).send({
            status: "KO",
            error: "Se debe pasar un identificador por parámetro para buscar"
        });
        return;
    }

    const success = productService.deleteOneProduct(productId);
    if (success.errorMsg != undefined){
        res.status(400).send({
            status: "KO",
            error: success.errorMsg
        });
    }

    res.status(204).send({
        status: "OK"
    });
};

module.exports = {
    getAllProducts,
    getOneProduct,
    createNewProduct,
    updateOneProduct,
    deleteOneProduct
};