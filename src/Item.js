import React from "react";
import { Link } from "react-router-dom";
import ItemButtons from "./ItemButtons";
import './App.css';

function Item({idx, name, price, description, url}) {
  
  return (
      
    <div className="Item">
    <Link to={`/products/${idx}`}>
       <h3>{name.toUpperCase()}</h3>
       <br></br>
       <h4>${price}</h4>
       <br></br>
       </Link>
    <ItemButtons idx={idx} />
    </div>
    
  );
}

export default Item;
