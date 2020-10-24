import {Switch, Route, Redirect} from "react-router-dom";
import React from "react";
import ProductList from "./ProductList";
import ItemDetails from "./ItemDetails";
import Cart from "./Cart";

function Routes() {
    return (
        <Switch>
            <Route exact path="/"><ProductList/></Route>
            <Route exact path="/products/:id"><ItemDetails /></Route>
            <Route exact path="/cart"><Cart/></Route>
            <Redirect to="/"/>
        </Switch>
    )
}

export default Routes;