import {Switch, Route, Redirect} from "react-router-dom";
import React from "react";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";

function Routes() {
    return (
        <Switch>
            <Route exact path="/"><ProductList/></Route>
            <Route exact path="/products/:id"><ProductDetails/></Route>
            <Route exact path="/cart"><Cart/></Route>
            <Redirect to="/"/>
        </Switch>
    )
}

export default Routes;