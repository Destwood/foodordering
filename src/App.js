import React from "react";
import "./App.css";
import Shop from "./components/Shop/Shop";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
