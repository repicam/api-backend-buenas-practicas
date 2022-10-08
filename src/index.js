const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("<h1>¡Hola mundo, esto funciona!</h1>");
});

app.listen(PORT, () => {
    console.log(`Servidor inciado en el puerto ${PORT}`);
});