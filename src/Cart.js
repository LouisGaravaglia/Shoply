import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import './App.css';

function Cart() {
  const cart = useSelector(state => state.cart)
  return (
      <div>
                {cart.map(product => <div><p>{product.id}</p> <p>{product.name}</p> <p>{product.quantity}</p></div>)}

        <p>{cart.name}</p>
        <p>{cart.id}</p>
        <p>{cart.quantity}</p>
          {/* {cart.map(product => <CartItem key={product.id} name={product.name} quantity={product.quantity}/>)} */}
      </div>
  )
}

export default Cart;
