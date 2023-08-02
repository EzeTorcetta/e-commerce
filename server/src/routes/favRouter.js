const { Router } = require("express");
const favRouter = Router();

const {
  getFavHandler,
  postFavHandler,
  deleteFavHandler,
  deleteAllFavsHandler
} = require("../handlers/favHandler");

favRouter.get("/:id_user", getFavHandler);
favRouter.delete("/:id_user", deleteAllFavsHandler);
favRouter.delete("/:id_user/:id_product", deleteFavHandler);
favRouter.post("/:id_user/:id_product", postFavHandler);

module.exports = favRouter;
