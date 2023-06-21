import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./component/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      ;
    </>
  );
}

export default App;
