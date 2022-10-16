const { v4: uuid } = require("uuid");
const Product = require("../database/Product");

const getAllProducts = () => {
    try {
        const allProducts = Product.getAllProducts();
        return allProducts;
    } catch (error) {
        throw error;
    }
};
const getOneProduct = (productId) => {
    try {
        const product = Product.getOneProduct(productId);
        return product;
    } catch (error) {
        throw error;
    }
};
const createNewProduct = (newProduct) => {
    const productToInsert = {
        ...newProduct,
        id: uuid()
    };

    try {
        const createdProduct = Product.createNewProduct(productToInsert);
        return createdProduct;
    } catch (error) {
        throw error;
    }
};
const updateOneProduct = (productId, changes) => {
    try {
        const updatedProduct = Product.updateOneProduct(productId, changes);
        return updatedProduct;
    } catch (error) {
        throw error;
    }
};
const deleteOneProduct = (productId) => {
    try {
        const deletedProduct = Product.deleteOneProduct(productId);
        return deletedProduct;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllProducts,
    getOneProduct,
    createNewProduct,
    updateOneProduct,
    deleteOneProduct
};