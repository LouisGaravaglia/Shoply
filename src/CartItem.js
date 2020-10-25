import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import CartItemButtons from "./CartItemButtons";
import './App.css';

function CartItem({id, name, quantity, img}) {
  return (
      <div className="CartItem">

        <p>{name}</p>
                <img src={img} alt="" />
        <p>QUANTITY: {quantity}</p>


       
       <div className="ItemButtonGroup">
        <br></br>
        <CartItemButtons idx={id}/>
       </div>



      </div>
  )
}

export default CartItem;
