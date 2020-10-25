import data from "./data.json";
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART } from "./actionTypes";

const INITIAL_STATE = {products: data.products, cart: []};

const rootReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            console.log("ADDING TO CART");
            const productInCart = state.cart.filter(item => item.id === action.id)
            console.log("PRODUCT IN CART at start: ", productInCart);
            const remainingCartItems = state.cart.filter(item => item.id !== action.id)
            console.log("REMAINING CART ITEMS: ", remainingCartItems);
            if (productInCart[0]) {
                console.log("HITTING IF STATEMENT");
                // console.log("productInCart['quantity']: ", productInCart["quantity"]);
                console.log("productInCart[0]['quantity']: ", productInCart[0]["quantity"]);
                // console.log("productInCart[0]: ", productInCart[0]);
                productInCart[0]["quantity"] = (+productInCart[0].quantity + +action.quantity);
                console.log("AFTER UPDATING QUANTITY: ", productInCart[0]["quantity"]);
                return {...state, cart: [...remainingCartItems, ...productInCart]};
            } else {
                console.log("HITTING ELSE STATEMENT");
                return {...state, cart: [...remainingCartItems, {...state.products[action.id], id : action.id, quantity : +action.quantity}]};
            }
            // return {...state, cart: [...state.cart, {...state.products[action.id], id : action.id, quantity : +action.quantity}]};
        case REMOVE_FROM_CART:
            return {...state, cart: state.cart.filter(item => item.id !== action.id)}
        case UPDATE_CART:
            console.log("TRYING TO UPDATE CART");
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