import data from "./data.json";
const INITIAL_STATE = {products: data.products, cart: []};

const rootReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case "ADD_TO_CART":
            return {...state, cart: [...state.cart, {...state.products[action.id], id : action.id}]};
        case "REMOVE_FROM_CART":
            console.log("rootReducer", state.cart[0].id);
            return {...state, cart: state.cart.filter(item => item.id !== action.id)}
        default:
            return state;
    }
}

export default rootReducer;