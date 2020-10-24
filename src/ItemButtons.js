import React, { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import { addToCart, removeFromCart } from "./actions";
import './App.css';

function ItemButtons({idx}) {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const cart = useSelector(store => store.cart)

    const handleChange = (e) => {
        setQuantity(e.target.value)
        console.log("hi");
    }
    const add = (id, quantity) => {
      dispatch(addToCart(id, quantity));
      console.log(id);
      console.log("Cart after adding: ", cart);
  };
    const remove = (id) => {
      dispatch(removeFromCart(id));
      console.log(id);
      console.log("Cart after removing: ", cart);
  };
  return (
    <div className="Item">
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
       <button onClick={() => add(idx, quantity)}>ADD</button>
       <button onClick={() => remove(idx)}>REMOVE</button>
       </div>
    </div>
  );
}

export default ItemButtons;
