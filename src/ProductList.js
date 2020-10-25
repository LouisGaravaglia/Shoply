import React from "react";
import {useSelector, useDispatch} from "react-redux";
import Item from "./Item";
import './App.css';

function ProductList() {
  const items = useSelector(store => store.products);
  const cart = useSelector(store => store.cart);
  let cartCount;
  let cartQuantities; 
  if(cart[0]){
    cartQuantities = cart.map(i => i.quantity);
    cartCount = cartQuantities.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue
  })
  } else {
    cartCount = 0
  }

 
  return (
      <>
      <div className="ProductListHeader">
        <h1>Our list of products</h1>
        <h3>TOTAL # OF ITEMS IN CART: {cartCount}</h3>
      </div>
    <div className="ProductList">
        {Object.keys(items).map(key => <Item idx={key} key={key} name={items[key].name} price={items[key].price} description={items[key].description} url={items[key].url}/>)}
    </div>
    </>
  );
}

export default ProductList;
