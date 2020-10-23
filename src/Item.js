import React from "react";
import {useSelector, useDispatch} from "react-redux";
import './App.css';

function Item({name, price, description, url, addToCart, removeFromCart}) {

  return (
    <div className="Item">
       <p>Name: {name}</p>
       <p>description: {description}</p>
       <p>price: {price}</p>
       <img src={url} alt=""/>
       <button onClick={addToCart}>Add to Cart</button>
       <button onClick={removeFromCart}>Remove from Cart</button>
    </div>
  );
}

export default Item;
