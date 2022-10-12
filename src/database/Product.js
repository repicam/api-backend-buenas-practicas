const DB = require("./bd.json");
const { saveData } = require("./utils");

const getAllProducts = () => {
    return DB.products;
};

const getOneProduct = (productId) => {
    return DB.products.find(product => product.id == productId);
};

const createNewProduct = (newProduct) => {
    const productExists = DB.products.findIndex(product => product.title === newProduct.title) > -1;

    if (productExists)
        return { error: true };

    DB.products.push(newProduct);
    saveData(DB);

    return newProduct;
};

module.exports = {
    getAllProducts,
    getOneProduct,
    createNewProduct
};