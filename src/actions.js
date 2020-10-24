import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

 export const addToCart = (id, quantity) => {
      return {type:ADD_TO_CART, id, quantity};
  };
  
export const removeFromCart = (id) => {
      return {type:REMOVE_FROM_CART, id}
  };