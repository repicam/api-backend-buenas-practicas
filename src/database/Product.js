const DB = require("./bd.json");
const { saveData } = require("./utils");

const getAllProducts = () => {
    return DB.products;
};

const getOneProduct = (productId) => {
    return DB.products.find((product) => product.id == productId);
};

const createNewProduct = (newProduct) => {
    const productExists = DB.products.findIndex((product) => product.title === newProduct.title) > -1;

    if (productExists)
        return { errorMsg: "Titulo ya existe en la lista de productos" };

    DB.products.push(newProduct);
    saveData(DB);

    return newProduct;
};

const updateOneProduct = (productId, changes) => {
    const indexForUpdate = DB.products.findIndex((product) => product.id === productId);

    if (indexForUpdate === -1)
        return { errorMsg: `No existe producto con identificador ${productId}` };

    const productExists = DB.products.findIndex((product) => product.title === changes.title) > -1;

    if (productExists)
        return { errorMsg: "Titulo ya existe en la lista de productos" };

    
    const updatedProduct = { 
        ...DB.products[indexForUpdate], 
        ...changes 
    };

    DB.products[indexForUpdate] = updatedProduct;
    saveData(DB);

    return updatedProduct;
};

const deleteOneProduct = (productId) => {
    const indexForDelete = DB.products.findIndex((product) => product.id === productId);

    if (indexForDelete === -1)
        return { errorMsg: `No existe producto con identificador ${productId}` };

    DB.products.splice(indexForDelete, 1);
    saveData(DB);

    return true;
};

module.exports = {
    getAllProducts,
    getOneProduct,
    createNewProduct,
    updateOneProduct,
    deleteOneProduct
};