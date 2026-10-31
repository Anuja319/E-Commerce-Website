import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Products from "./Components/Products";
import Contact from "./Components/Contact";
import PageNotFound from "./Components/PageNotFound";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/products" element={<Products></Products>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="*" element={<PageNotFound></PageNotFound>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
