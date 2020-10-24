import data from "./data.json";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

const INITIAL_STATE = {products: data.products, cart: [{quantity:0}]};

const rootReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_TO_CART:
         
            return {...state, cart: [...state.cart, {...state.products[action.id], id : action.id, quantity : +action.quantity}]};
        case REMOVE_FROM_CART:
         
            return {...state, cart: state.cart.filter(item => item.id !== action.id)}
        default:
            return state;
    }
}

export default rootReducer;