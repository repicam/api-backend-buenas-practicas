const fs = require("fs");

const saveData = (DB) => {
    fs.writeFileSync("./src/database/bd.json", JSON.stringify(DB, null, 2), {
        encoding: "utf8"
    });
};

module.exports = {
    saveData
};