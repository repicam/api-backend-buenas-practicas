const productService = require("../services/productService");

const getAllProducts = (req, res) => {
    const { brand } = req.query;
    const allProducts = productService.getAllProducts({brand});
    res.status(201).send({
        status: "OK",
        data: allProducts
    });
};

const getOneProduct = (req, res) => {
    const { params: { productId } } = req;

    if (!productId) {
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

    if (!body.title || !body.description || !body.price || !body.rating || !body.stock || !body.category) {
        res.status(400).send({
            status: "KO",
            data: { error: "Faltan datos obligatorios" }
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

    try {
        const createdProduct = productService.createNewProduct(newProduct);
        res.status(201).send({
            status: "OK",
            data: createdProduct
        });
    } catch (error) {
        res.status(error?.status || 500).send({
            status: "KO",
            data: { error: error?.msg || error }
        });
    }
};

const updateOneProduct = (req, res) => {
    const { body, params: { productId } } = req;

    if (!productId) {
        res.status(400).send({
            status: "KO",
            data: { error: "Se debe pasar un identificador por parámetro para modificar" }
        });
        return;
    }

    try {
        const updatedProduct = productService.updateOneProduct(productId, body);
        res.status(201).send({
            status: "OK",
            data: updatedProduct
        });
    } catch (error) {
        res.status(error?.status || 500).send({
            status: "KO",
            data: { error: error?.msg || error }
        });
    }
};

const deleteOneProduct = (req, res) => {
    const { params: { productId } } = req;

    if (!productId) {
        res.status(400).send({
            status: "KO",
            data: { error: "Se debe pasar un identificador por parámetro para modificar" }
        });
        return;
    }

    try {
        productService.deleteOneProduct(productId);
        res.status(204).send({
            status: "OK",
            data: null
        });
    } catch (error) {
        res.status(error?.status || 500).send({
            status: "KO",
            data: { error: error?.msg || error }
        });
    }
};

module.exports = {
    getAllProducts,
    getOneProduct,
    createNewProduct,
    updateOneProduct,
    deleteOneProduct
};