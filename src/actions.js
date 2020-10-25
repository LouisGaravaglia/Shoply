import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART } from "./actionTypes";

 export const addToCart = (id, quantity) => {
      return {type:ADD_TO_CART, id, quantity};
  };
  
export const removeFromCart = (id) => {
      return {type:REMOVE_FROM_CART, id}
  };

  export const updateCart = (id, quantity) => {
      return {type:UPDATE_CART, id, quantity}
  };