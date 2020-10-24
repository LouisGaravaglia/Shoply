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
       <h3>{name.toUpperCase()}</h3>
       <p>{description}</p>
       <br></br>
       <h4>${price}</h4>
       <img src={url} alt=""/>
       <br></br>
       <label className="ItemQuantity" htmlFor="quantity">Quantity: </label>
       <input 
           type="number"
           min="1"
           id="quantity"
           name="quantity"
           value={quantity}
           onChange={handleChange}
       />
       <div className="ItemButtonGroup">
       <button onClick={() => addToCart(idx, quantity)}>ADD</button>
       <button onClick={() => removeFromCart(idx)}>REMOVE</button>
       </div>
    </div>
  );
}

export default Item;
