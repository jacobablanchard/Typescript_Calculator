import React from "react";
import "./App.css";
import Calculator from "./Calculator";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <h1 className="TitleBar">My Calculator App</h1>
      <Calculator></Calculator>
    </div>
  );
}

export default App;
