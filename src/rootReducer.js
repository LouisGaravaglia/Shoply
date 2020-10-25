import data from "./data.json";
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART } from "./actionTypes";

const INITIAL_STATE = {products: data.products, cart: []};

const rootReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return {...state, cart: [...state.cart, {...state.products[action.id], id : action.id, quantity : +action.quantity}]};
        case REMOVE_FROM_CART:
            return {...state, cart: state.cart.filter(item => item.id !== action.id)}
        case UPDATE_CART:
            const updatedCartItem = state.cart.filter(item => item.id === action.id)
            updatedCartItem["quantity"] = action.quantity;
            const restOfCart = state.cart.filter(item => item.id !== action.id)
            return {...state, cart: [...restOfCart, ...updatedCartItem]}
        default:
            return state;
    }
}

export default rootReducer;

// function changeDesc( value, desc ) {
//    for (var i in projects) {
//      if (projects[i].value == value) {
//         projects[i].desc = desc;
//         break; //Stop this loop, we found it!
//      }
//    }
// }