import React from "react";
import {useSelector, useDispatch} from "react-redux";
import Item from "./Item";
import './App.css';

function ProductList() {
  const items = useSelector(store => store.products);
  const cart = useSelector(store => store.cart)
//   [0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
//   return accumulator + currentValue
// })
  const cartQuantities = cart.map(i => i.quantity);
  const cartCount = cartQuantities.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue
  })
  const dispatch = useDispatch();
  const addToCart = (id, quantity) => {
      dispatch({type:"ADD_TO_CART", id, quantity});
      console.log(id);
      console.log("Cart after adding: ", cart);
  };
  const removeFromCart = (id) => {
      dispatch({type:"REMOVE_FROM_CART", id});
      console.log(id);
      console.log("Cart after removing: ", cart);
  };
  return (
      <>
      <div className="ProductListHeader">
        <h1>Our list of products</h1>
        <h3>TOTAL # OF ITEMS IN CART: {cartCount}</h3>
      </div>
    <div className="ProductList">
        {Object.keys(items).map(key => <Item removeFromCart={removeFromCart} idx={key} addToCart={addToCart} key={key} name={items[key].name} price={items[key].price} description={items[key].description} url={items[key].url}/>)}
    </div>
    </>
  );
}

export default ProductList;
