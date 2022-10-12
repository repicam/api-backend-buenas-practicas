const Product = require("../database/Product");

const getAllProducts = () => { 
    const allProducts = Product.getAllProducts();
    return allProducts;
};
const getOneProduct = (productId) => { 
    const product = Product.getOneProduct(productId);
    return product;
};
const createNewProduct = () => { 
    return; 
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