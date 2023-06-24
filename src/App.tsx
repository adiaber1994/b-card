import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./component/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Signup from "./auth/SignUp";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="signup" element={<Signup/>}/>
      </Routes>
    </>
  );
}

export default App;
