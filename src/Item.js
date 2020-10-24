import React, { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import './App.css';

function Item({idx, name, price, description, url, addToCart, removeFromCart}) {
    const [quantity, setQuantity] = useState(1);
    const handleChange = (e) => {
        setQuantity(e.target.value)
        console.log("hi");
    }
  return (
    <div className="Item">
       <p>Name: {name}</p>
       <p>description: {description}</p>
       <p>price: {price}</p>
       <img src={url} alt=""/>
       <label htmlFor="quantity">Quantity</label>
       <input 
           type="number"
           min="1"
           id="quantity"
           name="quantity"
           value={quantity}
           onChange={handleChange}
       />
       <button onClick={() => addToCart(idx, quantity)}>Add to Cart</button>
       <button onClick={() => removeFromCart(idx)}>Remove from Cart</button>
    </div>
  );
}

export default Item;
