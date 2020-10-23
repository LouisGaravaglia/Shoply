import React from "react";
import {useSelector, useDispatch} from "react-redux";
import Item from "./Item";
import './App.css';

function ProductList() {
  const items = useSelector(store => store.products);
  const dispatch = useDispatch();
  const addToCart = (id) => {
      dispatch({type:"ADD_TO_CART", id});
  };
  const removeFromCart = (id) => {
      dispatch({type:"REMOVE_FROM_CART", id});
  };
  return (
    <div className="ProductList">
        <h2>Our list of products</h2>
        {Object.keys(items).map(key => <Item removeFromCart={() => removeFromCart(key)}  addToCart={() => addToCart(key)} key={key} name={items[key].name} price={items[key].price} description={items[key].description} url={items[key].url}/>)}
    </div>
  );
}

export default ProductList;
