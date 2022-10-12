const getAllProducts = (req, res) => {
    res.send(`<h1>¡Get all products!</h1>`);
};

const getOneProduct = (req, res) => {
    res.send(`<h1>¡Get product ${req.params.productId}!</h1>`);
};

const createNewProduct = (req, res) => {
    res.send(`<h1>Create product!</h1>`);
};

const updateOneProduct = (req, res) => {
    res.send(`<h1>¡Update product ${req.params.productId}!</h1>`);
};

const deleteOneProduct = (req, res) => {
    res.send(`<h1>¡Delete product ${req.params.productId}!</h1>`);
};

module.exports = {
    getAllProducts,
    getOneProduct,  
    createNewProduct, 
    updateOneProduct, 
    deleteOneProduct
};