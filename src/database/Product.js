const DB = require("./bd.json");

const getAllProducts = () => {
    return DB.products;
}

const getOneProduct = (productId) => {
    DB.products.find(product => product.id == productId);
}

module.exports = {
    getAllProducts,
    getOneProduct
}