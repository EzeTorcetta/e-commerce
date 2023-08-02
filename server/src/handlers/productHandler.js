const {
    getAllProducts,
} = require("../controllers/productController.js")


//* Handler que trae todos los productos de la DB
const getAllProductsHandler = async (req, res) => {
    // const {
    //   order,
    //   page,
    //   name,
    //   id_user,
    // } = req.query;

    try {
      const allProducts = await getAllProducts()
      
      if (allProducts.length) { 
        res.status(200).json(allProducts)}
      else   {res.status(400).json({ error: "No se encontró ningún producto con los datos solicitados" });}
    
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

module.exports = {
    getAllProductsHandler,
}