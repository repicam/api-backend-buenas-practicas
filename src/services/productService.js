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
const updateOneProduct = () => { 
    return; 
};
const deleteOneProduct = () => { 
    return; 
};

module.exports = {
    getAllProducts,
    getOneProduct,  
    createNewProduct, 
    updateOneProduct, 
    deleteOneProduct
};