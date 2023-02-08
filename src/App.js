import logo from "./logo.svg";
import "./App.css";
import { changeTheNumber } from "./Redux/action/index";
import { useDispatch, useSelector } from "react-redux";
import { incNumber, decNumber } from "./Redux/action/index";
import { useState } from "react";
function App() {
  let counter = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Increament/Decreament counter</h1>
      <h4>Using React Redux</h4>
      <div className="Quantity">
        <button className="decreament" onClick={() => dispatch(decNumber())}>
          -
        </button>
        <input
          type="text"
          name="quantity"
          className="quantity_input"
          value={counter}
        />
        <button className="increament" onClick={() => dispatch(incNumber())}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
