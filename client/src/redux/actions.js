import axios from "axios";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";



//* --------------  GET ALL PRODUCTS -------------------------
export const getAllProducts = () => {
    return async function (dispatch) {
        const products = await axios.get("/product")

        dispatch({type: GET_ALL_PRODUCTS, payload: products.data})
    }
}