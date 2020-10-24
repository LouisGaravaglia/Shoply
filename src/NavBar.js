import {NavLink} from "react-router-dom";
import React from "react";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";

function NavBar() {
    return (
        <NavLink to="/">Home</NavLink>
    )
}

export default NavBar;