const { Router } = require("express");
const productRouter = Router();
const {getAllProductsHandler} = require ("../handlers/productHandler")

productRouter.get("/", getAllProductsHandler);
// productRouter.get("/:id_product", getDetailHandler);
// productRouter.post("/", postProductHandler);

module.exports = productRouter;
