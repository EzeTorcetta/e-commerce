import { GET_ALL_PRODUCTS } from "./actions";

const initialState = {
    products : [],

}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_PRODUCTS:

            return {
                ...state,
                products: action.payload
            }
        
        default:
            return {...state};
    }
}