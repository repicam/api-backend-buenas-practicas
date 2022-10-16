const DB = require("./bd.json");
const { saveData } = require("./utils");

const getAllProducts = (filterParams) => {
    try {
        let products = DB.products;

        if (filterParams.brand) {
            return DB.products.filter((product) => product.brand.toLowerCase().includes(filterParams.brand));
        }

        return products;
    } catch (error) {
        throw {
            status: 500,
            msg: error?.message || error
        };
    }
};

const getOneProduct = (productId) => {
    try {
        const product = DB.products.find((product) => product.id == productId);

        if (!product) {
            throw {
                status: 400,
                msg: `No existe producto con identificador ${productId}`
            };
        }

        return product;
    } catch (error) {
        throw {
            status: 500,
            msg: error?.message || error
        };
    }
};

const createNewProduct = (newProduct) => {
    const productExists = DB.products.findIndex((product) => product.title === newProduct.title) > -1;

    if (productExists) {
        throw {
            status: 400,
            msg: `Titulo ya existe en la lista de productos ${newProduct.title}`
        };
    }

    try {
        DB.products.push(newProduct);
        saveData(DB);

        return newProduct;
    } catch (error) {
        throw {
            status: 500,
            msg: error?.message || error
        };
    }
};

const updateOneProduct = (productId, changes) => {
    const indexForUpdate = DB.products.findIndex((product) => product.id === productId);
    if (indexForUpdate === -1) {
        throw {
            status: 400,
            msg: `No existe producto con identificador ${productId}`
        };
    }

    const productExists = DB.products.findIndex((product) => product.title === changes.title) > -1;
    if (productExists) {
        throw {
            status: 400,
            msg: `Titulo ya existe en la lista de productos ${newProduct.title}`
        };
    }

    const updatedProduct = {
        ...DB.products[indexForUpdate],
        ...changes
    };

    try {
        DB.products[indexForUpdate] = updatedProduct;
        saveData(DB);

        return updatedProduct;
    } catch (error) {
        throw {
            status: 500,
            msg: error?.message || error
        };
    }
};

const deleteOneProduct = (productId) => {
    const indexForDelete = DB.products.findIndex((product) => product.id === productId);

    if (indexForUpdate === -1) {
        throw {
            status: 400,
            msg: `No existe producto con identificador ${productId}`
        };
    }

    try {
        DB.products.splice(indexForDelete, 1);
        saveData(DB);

        return;
    } catch (error) {
        throw {
            status: 500,
            msg: error?.message || error
        };
    }
};

module.exports = {
    getAllProducts,
    getOneProduct,
    createNewProduct,
    updateOneProduct,
    deleteOneProduct
};