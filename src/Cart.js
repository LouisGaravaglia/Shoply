import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import CartItem from "./CartItem";
import './App.css';

function Cart() {
  const cart = useSelector(state => state.cart)
  


  return (
      <div className="CartList">
      <h1>SHOPPING CART</h1>
      {/* <CartItem idx={product.id} name={product.name} quanity={product.quantity}/>
        {cart.map(product => <div><p>{product.id}</p> <p>{product.name}</p> <p>{product.quantity}</p></div>)}
        <p>{cart.name}</p>
        <p>{cart.id}</p>
        <p>{cart.quantity}</p>
        <img src={cart.image_url} alt="" />
         */}
          {cart.map(product => <CartItem key={product.id} id={product.id} name={product.name} quantity={product.quantity} img={product.image_url}/>)}

      </div>
  )
}

export default Cart;
