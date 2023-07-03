import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./component/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/About";
import Signup from "./auth/SignUp";
import MyCards from "./pages/MyCards";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="my cards" element={<MyCards />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
