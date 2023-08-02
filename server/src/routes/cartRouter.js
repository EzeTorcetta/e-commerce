const { Router } = require("express");
const cartRouter = Router();

const {
  getCartHandler,
  postCartHandler,
  deleteCartHandler,
  deleteAllCartHandler,
  putAmountCartHandler,
} = require("../handlers/cartHandler");

cartRouter.get("/:id_user", getCartHandler);
cartRouter.delete("/:id_user", deleteAllCartHandler);
cartRouter.delete("/:id_user/:id_product", deleteCartHandler);
cartRouter.post("/:id_user/:id_product", postCartHandler);
cartRouter.put("/:id_user/:id_product/", putAmountCartHandler);
module.exports = cartRouter;
