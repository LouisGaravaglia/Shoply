import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ItemButtons from "./ItemButtons";
import './App.css';

function ItemDetails() {
  const { id } = useParams();
  const {name, description, price, url } = useSelector(store => ({...store.products[id]}));

  return (
    <div className="Item">
       <h3>{name.toUpperCase()}</h3>
       <p>{description}</p>
       <br></br>
       <h4>${price}</h4>
       <img src={url} alt=""/>
       <br></br>
    <ItemButtons idx={id} />
    </div>
  );
}

export default ItemDetails;
