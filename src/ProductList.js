import React from "react";
import {useSelector, useDispatch} from "react-redux";
import Item from "./Item";
import './App.css';

function ProductList() {
  const items = useSelector(store => store.products);
  const cart = useSelector(store => store.cart)
  const dispatch = useDispatch();
  const addToCart = (id, quantity) => {
      dispatch({type:"ADD_TO_CART", id, quantity});
      console.log(id);
      console.log("Cart after adding: ", cart);
  };
  const removeFromCart = (id, quantity) => {
      dispatch({type:"REMOVE_FROM_CART", id, quantity});
      console.log(id);
      console.log("Cart after removing: ", cart);
  };
  return (
    <div className="ProductList">
        <h2>Our list of products</h2>
        {Object.keys(items).map(key => <Item removeFromCart={removeFromCart}  addToCart={addToCart} key={key} name={items[key].name} price={items[key].price} description={items[key].description} url={items[key].url}/>)}
    </div>
  );
}

export default ProductList;
