import React from "react";
import {useSelector, useDispatch} from "react-redux";
import './App.css';

function ProductList() {
  const items = useSelector(store => store.products);
  const 
  return (
    <div className="ProductList">
        <h2>Our list of products</h2>
        {Object.keys(items).map(key => <Item key={key} name={items[key].name} price={items[key].price} description={items[key].description} url={items[key].url}/>)}
    </div>
  );
}

export default ProductList;
