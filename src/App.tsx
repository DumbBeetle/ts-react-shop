import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CartProvider } from "./hooks/CartContext";
import {Route, Router, Routes} from "react-router-dom";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products/:id" element={<SingleProduct />} />
        {/*  <Route path="about" element={<About />} />*/}
        {/*  <Route path="*" element={<NotFound />} />*/}
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
