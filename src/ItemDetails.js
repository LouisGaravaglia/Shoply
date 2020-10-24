import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ItemButtons from "./ItemButtons";
import './App.css';

function ItemDetails() {
  const { id } = useParams();
  const {name, description, price, image_url } = useSelector(store => ({...store.products[id]}));
    console.log("URL", image_url);
  return (
    <div className="ItemDetails">
       <h3>{name.toUpperCase()}</h3>
        <br></br>
       <p>{description}</p>
       <img src={image_url} alt=""/>
       <br></br>
       <h4>Price: ${price}</h4>
       <br></br>
    <ItemButtons idx={id} />
    </div>
  );
}

export default ItemDetails;
