import React, { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import './App.css';

function Item({key, name, price, description, url, addToCart, removeFromCart}) {
    const [quantity, setQuantity] = useState(0)
    const handleChange = (e) => {
        setQuantity(e.target.value)
    }
  return (
    <div className="Item">
       <p>Name: {name}</p>
       <p>description: {description}</p>
       <p>price: {price}</p>
       <img src={url} alt=""/>
       <label forHtml="quantity">Quantity</label>
       <input 
           type="number"
           id="quantity"
           name="quantity"
           value={quantity}
           onChange={handleChange}
       />
       <button onClick={() => addToCart(key, quantity)}>Add to Cart</button>
       <button onClick={() => removeFromCart(key, quantity)}>Remove from Cart</button>
    </div>
  );
}

export default Item;
