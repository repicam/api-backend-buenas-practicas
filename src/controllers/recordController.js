const recordService = require("../services/recordService");

const getAllRecords = (req, res) => {
    const allRecords = recordService.getAllRecords();
    res.status(201).send({
        status: "OK",
        data: allRecords
    });
};

const getRecordByProduct = (req, res) => {
    const { params: { productId } } = req;

    if (!productId) {
        res.status(400).send({
            status: "KO",
            error: "Se debe pasar un identificador por parámetro para buscar"
        });
        return;
    }

    try {
        const record = recordService.getRecordByProduct(productId);
        res.status(201).send({
            status: "OK",
            data: record
        });
    } catch (error) {
        res.status(error?.status || 500).send({
            status: "KO",
            data: { error: error?.msg || error }
        });
    }

    
};

module.exports = {
    getAllRecords,
    getRecordByProduct
};