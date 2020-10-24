import {NavLink} from "react-router-dom";
import React from "react";

function NavBar() {
    return (
        <div className="NavBar">
        <NavLink className="NavBarLink" to="/">PRODUCTS</NavLink>
        <NavLink className="NavBarLink" to="/cart">CART</NavLink>
        </div>
    )
}

export default NavBar;