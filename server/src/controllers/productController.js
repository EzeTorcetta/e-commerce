//?----------------------------IMPORTS----------------------------------
const {Product} = require("../db")
const axios = require("axios");

//?----------------------------CONTROLLERS------------------------------

//*------------GET ALL PRODUCTS -------------------
const getAllProducts = async () => {
    let products = await Product.findAll()

    if(products.length === 0){
        const response = await axios("https://fakestoreapi.com/products");
       
        const productsApi = response.data.map( prod => {
            return {
                id: prod.id,
                title: prod.title,
                price: prod.price,
                category: prod.category,
                description: prod.description,
                image: prod.image,
            }
        })
        await Product.bulkCreate(productsApi);
        products = await Product.findAll()
    }

    return products;

}


module.exports = {
    getAllProducts,
}