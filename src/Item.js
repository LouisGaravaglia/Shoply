import React from "react";
import { Link } from "react-router-dom";
import ItemButtons from "./ItemButtons";
import './App.css';

function Item({idx, name, price, description, url}) {
  
  return (
      <Link to={`/products/${idx}`}>
    <div className="Item">
       <h3>{name.toUpperCase()}</h3>
       <br></br>
       <h4>${price}</h4>
       <br></br>
    <ItemButtons idx={idx} />
    </div>
    </Link>
  );
}

export default Item;
