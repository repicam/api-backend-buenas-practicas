const Record = require("../database/Record");

const getAllRecords = () => { 
    const allRecords = Record.getAllRecords();
    return allRecords;
};
const getRecordByProduct = (productId) => { 
    try {
        const record = Record.getRecordByProduct(productId);
        return record;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllRecords,
    getRecordByProduct
};