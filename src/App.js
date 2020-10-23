import React from "react";
import {useSelector, useDispatch} from "react-redux";
import ProductList from "./ProductList";
import './App.css';

function App() {
  const items = useSelector(store => store.products);
  return (
    <div className="App">
        <ProductList />
    </div>
  );
}

export default App;
