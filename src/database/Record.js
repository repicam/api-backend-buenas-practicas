const DB = require("./bd.json");

const getAllRecords = () => {
    return DB.record;
};

const getRecordByProduct = (productId) => {
    try {
        const record = DB.record.filter((record) => record.product === productId);

        if (!record){
            throw { 
                status: 400,
                msg: `No existe un historial para el producto ${productId}` 
            };
        }

        return record;
    } catch (error) {
        throw {
            status: 500,
            msg: error?.message || error
        }
    }
};

module.exports = {
    getAllRecords,
    getRecordByProduct
};