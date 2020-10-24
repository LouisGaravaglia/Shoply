import React from "react";
import {useSelector, useDispatch} from "react-redux";
import Routes from "./Routes";
import NavBar from "./NavBar";
import './App.css';

function App() {
  const items = useSelector(store => store.products);
  return (
    <div className="App">
        <NavBar />
        <Routes />
    </div>
  );
}

export default App;
