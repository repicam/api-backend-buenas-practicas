const { v4: uuid } = require("uuid");
const Product = require("../database/Product");

const getAllProducts = () => { 
    const allProducts = Product.getAllProducts();
    return allProducts;
};
const getOneProduct = (productId) => { 
    const product = Product.getOneProduct(productId);
    return product;
};
const createNewProduct = (newProduct) => { 
    const productToInsert = {
        ...newProduct,
        id: uuid()
    };

    const createdProduct = Product.createNewProduct(productToInsert);
    return createdProduct;
};
const updateOneProduct = (productId, changes) => { 
    const updatedProduct = Product.updateOneProduct(productId, changes);
    return updatedProduct;
};
const deleteOneProduct = (productId) => { 
    const deletedProduct = Product.deleteOneProduct(productId);
    return deletedProduct;
};

module.exports = {
    getAllProducts,
    getOneProduct,  
    createNewProduct, 
    updateOneProduct, 
    deleteOneProduct
};