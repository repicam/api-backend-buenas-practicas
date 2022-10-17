const express = require("express");

const v1ProductRouter = require("./v1/routes/productRoutes");
const { swaggerDocs: v1SwaggerDocs } = require('./v1/swagger')

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api/v1/products", v1ProductRouter);

app.listen(PORT, () => {
    console.log(`Servidor inciado en el puerto ${PORT}`);
    v1SwaggerDocs(app, PORT);
});