const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

//Metadata info sobre la API
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Products API",
            version: "1.0.0"
        }
    },
    apis: ["src/v1/routes/productRoutes.js", "src/database/Product.js"]
};

//Documentación en formato JSON
const swaggerSpec = swaggerJSDoc(options);

//Configurar la documentación
const swaggerDocs = (app, port) => {
    app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get('/api/v1/docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });
};

module.exports = { swaggerDocs };