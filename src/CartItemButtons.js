import React, { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import { updateCart, removeFromCart } from "./actions";
import './App.css';

function CartItemButtons({idx}) {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const cart = useSelector(store => store.cart)

    const handleChange = (e) => {
        setQuantity(e.target.value)
        console.log("hi");
    }
    const remove = (id) => {
      dispatch(removeFromCart(id));
      console.log(id);
      console.log("Cart after removing: ", cart);
    };
        const update = (id, quantity) => {
      dispatch(updateCart(id, quantity));
      console.log(id);
      console.log("Cart after updating: ", cart);
    };
  return (
    <div>
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
        <br></br>
       <button onClick={() => update(idx, quantity)}>Update</button>
       <button onClick={() => remove(idx)}>REMOVE</button>
       </div>
    </div>
  );
}

export default CartItemButtons;
