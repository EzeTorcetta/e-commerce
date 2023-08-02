//?----------------------------IMPORTS--------------------------------

const { User, Product, Favorites } = require("../db");

//?----------------------------CONTROLLERS------------------------------

//*------------GET ALL FAVS-------------------
const getFavs = async (id_user) => {
  const favs = await Favorites.findAll({
    where: { UserId: id_user },
  });

  const productsPromises = favs.map(async (fav) => {
    const product = await Product.findByPk(fav.ProductId);
    return product;
  });

  const products = await Promise.all(productsPromises);

  return products;
};

//*------------ADD FAV-------------------

const postFav = async (id_user, id_product) => {
  const user = await User.findByPk(id_user);
  const product = await Product.findByPk(id_product);
  await product.addUser(user);
  return;
};

//*------------DELETE FAV-------------------

const deleteFav = async (id_user, id_product) => {
  const product = await Product.findByPk(id_product);
  await product.removeUser(id_user);
  return;
};

//*----------- DELETE ALL FAVORITES----------------
const deteleAllFavs = async (id_user) => {
  await Favorites.destroy({
      where: { UserId: id_user },
    });

return;
};

module.exports = {
  getFavs,
  postFav,
  deleteFav,
  deteleAllFavs,
};
